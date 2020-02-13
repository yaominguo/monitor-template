<template>
  <div class="container">
    <iframe id="map" frameborder="no" scrolling="no" allowtransparency="true"/>
    <ThemeTitle class="title">
      物业督查实时专题图
    </ThemeTitle>
    <MapOperateTop @select="handlePointSelect" class="map-top" ref="mapTop" v-show="!fullScreen"/>
    <MapOperateBottom @zoom="handleZoom" @fullscreen="handleFullscreen" @reset="handleReset" class="map-bottom"/>
    <div class="box1" >
      <m-card title="当日检查情况" v-show="!fullScreen" enter="fadeInLeft" leave="fadeOutLeft">
        <DayCheckSituation />
      </m-card>
    </div>
    <div class="box2">
      <m-card title="检查人员列表" mode="2" v-show="!fullScreen && !showDrawer">
        <PersonList @select="handlePersonSelect" ref="person"/>
      </m-card>
    </div>
    <div class="box3">
      <m-card title="检查主题列表" v-show="!fullScreen" enter="fadeInLeft" leave="fadeOutLeft">
        <ThemeList @select="handleThemeSelect" ref="theme"/>
      </m-card>
    </div>
    <div class="box4">
      <m-card title="完成检查小区列表" mode="2" v-show="!fullScreen && !showDrawer">
        <CommunityList :list="checkedList" @select="handleCommunitySelect($event, 'blue')" ref="community"/>
      </m-card>
    </div>
    <div class="box5">
      <m-card title="当日检查情况对比" v-show="!fullScreen" enter="fadeInLeft" leave="fadeOutLeft">
        <DayCheckComparison />
      </m-card>
    </div>
    <div class="box6">
      <m-card title="开具整改单列表" mode="2" v-show="!fullScreen && !showDrawer">
        <CommunityList :list="rectifyList" @select="handleCommunitySelect($event, 'red')" ref="community2"/>
      </m-card>
    </div>
    <m-drawer v-model="showPersonModal" @close="closePersonModal">
      <m-form title="检查人员详情" :layout="personLayout.slice(0, 1)" :model="personData"/>
      <m-form title="检查详情" :layout="personLayout.slice(1)" :model="personData"/>
    </m-drawer>
    <m-drawer v-model="showCommunityModal" @close="closeCommunityModal">
      <Select class="tabs" v-model="curTab" v-if="communityData.length > 1">
        <Option v-for="(item, i) in communityData" :value="i" :key="i">{{item.THEME}}</Option>
      </Select>
      <m-form title="检查小区详情" :label-width="8" :layout="communityLayout.slice(0, 1)" :model="communityData[curTab]"/>
      <m-form title="检查详情" :label-width="8" :layout="communityLayout.slice(1)" :model="communityData[curTab]"/>
      <m-table mode="2" title="未落实指标" :layout="communityTableLayout" :model="communityTableData[curTab]"/>
    </m-drawer>
  </div>
</template>

<script>
import ThemeTitle from './components/title'
import DayCheckSituation from './components/day-check-situation'
import ThemeList from './components/theme-list'
import PersonList from './components/person-list'
import CommunityList from './components/community-list'
import DayCheckComparison from './components/day-check-comparison'
import MapOperateTop from './components/map-operate-top'
import MapOperateBottom from './components/map-operate-bottom'
export default {
  name: 'Main',
  components: {
    ThemeTitle,
    DayCheckSituation,
    ThemeList,
    PersonList,
    CommunityList,
    DayCheckComparison,
    MapOperateTop,
    MapOperateBottom,
  },
  data() {
    return {
      map: null,
      timer: null,
      fullScreen: false,
      curTab: 0,
      curThemeId: null,
      showPersonModal: false,
      personLayout: [
        {
          TE_NAME: {
            label: '检查人员姓名',
            width: 24,
          },
          ORG_NAME: {
            label: '所在单位',
            width: 24
          },
          MOBILE: {
            label: '手机号码',
            width: 24,
          },
        },
        {
          TASK_NAME: {
            label: '检查主题名称',
            width: 24,
          },
          NAME: {
            label: '发布单位',
            width: 24,
          },
          CHECKCOMMUNITYNUMBER: {
            label: '已检查小区数',
            width: 24,
          },
          RECTIFICATIONNUMBER: {
            label: '已发布整改单数',
            width: 24,
          },
        },
      ],
      personData: {},
      showCommunityModal: false,
      communityLayout: [
        {
          COMMUNITYNAME: {
            label: '小区名称',
            width: 24,
          },
          COMMUNITYADDRESS: {
            label: '小区地址',
            width: 24,
          },
          HP_NAME: {
            label: '行政区',
            width: 24,
          },
          HO_NAME: {
            label: '房办',
            width: 24,
          },
          PROPERTYNAME: {
            label: '物业企业',
            width: 24,
          },
          COMMUNITYMANAGER: {
            label: '小区经理',
            width: 24,
          },
          MANAGERTEL: {
            label: '小区经理手机',
            width: 24,
          },
        },
        {
          THEME: {
            label: '主题名称',
            width: 24,
          },
          DEPTTYPE: {
            label: '发布单位',
            width: 24,
          },
          TENAME: {
            label: '检查人员姓名',
            width: 24,
          },
          TE_NAME: {
            label: '同行人员姓名',
            width: 24,
          },
          INSPECTION_DATE: {
            label: '完成检查时间',
            width: 24,
          },
          IS_PUBLISH: {
            label: '是否开具整改单',
            width: 24,
          },
          SIGNATUREIMAGE: {
            label: '小区经理签名',
            width: 24,
            type: 'img',
          },
        },
      ],
      communityData: [],
      communityTableLayout: [
        {
          title: '指标名称',
          key: 'INDEXNAME',
          width: 8,
        },
        {
          title: '检查情况',
          key: 'REMARK',
          width: 8,
        },
        {
          title: '附件',
          key: 'imageList',
          width: 8,
          type: 'img',
        },
      ],
      communityTableData: [],
    }
  },
  mounted() {
    this.$nextTick(this.initMap)
    // this.initData()
    this.timer = setInterval(() => {
      this.initData(this.curThemeId)
    }, 1000 * 60 * 3)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  computed: {
    checkedList() {
      return this.$store.state.checkedList
    },
    rectifyList() {
      return this.$store.state.rectifyList
    },
    showDrawer() {
      return this.showPersonModal || this.showCommunityModal
    },
  },
  methods: {
    initData(themeId = null, startDate, endDate) {
      const {curDate} = this.$store.state
      let today = this.$moment().format('YYYYMMDD')
      let defaultDay = this.$moment().format('YYYY-MM-DD') // 检查人员列表默认开始、结束时间
      if (curDate) {
        today = this.$moment(curDate).format('YYYYMMDD')
        defaultDay = this.$moment(curDate).format('YYYY-MM-DD')
      }
      const communityParams = {someday: today}
      const personParams = {startDate: startDate || `${defaultDay} 00:00:00`, endDate: endDate || `${defaultDay} 24:00:00`}
      if (themeId) {
        communityParams.taskId = themeId
        personParams.taskId = themeId
      }
      if (!themeId) {
        this.$store.dispatch('GET_THEME_LIST', {flag: 0, someday: today})
      }
      this.$store.dispatch('GET_COMMUNITY_LIST', communityParams)
      this.$store.dispatch('GET_PERSON_LIST', personParams)
    },
    initMap() {
      const {ShsmiGis} = window
      this.map = new ShsmiGis.Bridge({
        id: 'map',
        url: this.$api.MAP_URL,
        onReady: () => {
          // console.log('地图创建完成')
          this.initData()
          this.addListener()
        }
      })
    },
    addListener() {
      this.map.addEventListener(arg => {
        switch (arg.action.toLowerCase()) {
        case 'selectfeatures':
          if (!arg.layername) return
          if (arg.layername == 'person-points') {
            this.handlePersonSelect(arg.data[0])
          } else if (arg.layername == 'checked-points') {
            if (arg.data[0].icon) {
              this.handleCommunitySelect(arg.data, 'red')
              return
            }
            this.handleCommunitySelect(arg.data, 'blue')
          } else if (arg.layername == 'rectify-points') {
            this.handleCommunitySelect(arg.data, 'red')
          }
          break
        default:
          // console.log(arg)
          break
        }
      }, this)
    },
    addPoint({name, mode = 'add', key, data, labelKey = null, icon = 'test.png', size = 20}) {
      if(!this.map) return
      this.removePoint(name)
      const params = this.$com.getMapParams({data, key, labelKey, icon, size})
      params.name = name
      params.mode = mode
      this.map.Invoke({
        ActionName: 'displayJsonData',
        Parameters: JSON.stringify(params),
      })
    },
    removePoint(name) {
      if (!this.map) return
      this.map.Invoke({
        ActionName: 'displayJsonData',
        Parameters: JSON.stringify({
          name,
          mode: 'delete',
        })
      })
    },
    addGifPoint({name, data, labelKey, icon, size = 200, color = '#00FFFF'}) {
      if(!this.map) return
      if (!Array.isArray(data)) {
        data = [data]
      }
      const params = {
        name: name,
        mode: 'add',
        datas: data.map(item => {
          return {
            name: labelKey ? item[labelKey] : null,
            value: size,
            corrd: [item.X, item.Y],
            color: color,
          }
        }),
        symbol: icon ? ('image://' + this.$api.MAP_ICON_BASE + icon) : 'circle',
        position: 'right',
      }
      this.map.Invoke({
        ActionName: 'flashlayer',
        Parameters: JSON.stringify(params),
      })
    },
    removeGifPoint(name) {
      if(!this.map) return
      this.map.Invoke({
        ActionName: 'flashlayer',
        Parameters: JSON.stringify({
          name,
          mode: 'delete',
        })
      })
    },
    gotoPosition(x, y, zoom = 6) {
      if (!this.map || !x || !y ) return
      const params = {
        codX: x,
        codY: y,
        zoomlevel: zoom,
      }
      this.map.Invoke({
        ActionName: 'goToPosition',
        Parameters: JSON.stringify(params),
      })
    },
    handlePersonSelect(data) {
      this.removeGifPoint('selected-point')
      this.removeGifPoint('path-points')
      const {OPER_ID, TASK_ID, X, Y} = data
      this.gotoPosition(X, Y, 10)
      this.addGifPoint({name: 'selected-point', key: 'OPER_ID', data: data, icon: 'person6.png', size: 300})
      // 获取人员详情
      this.$ajax.post({
        url: this.$api.POST_PERSON_DETAIL,
        params: {
          taskId: TASK_ID,
          operId: OPER_ID,
        }
      }).then(res => {
        this.personData = (this.$com.confirm(res, 'data.content', []))[0]
        this.showPersonModal = true
      })
      // 获取人员轨迹
      const today = this.$moment().format('YYYY-MM-DD')
      this.$ajax.post({
        url: this.$api.POST_PERSON_PATH,
        params: {
          person: OPER_ID,
          theme: TASK_ID,
          startTime: `${today} 00:00:00`,
          endTime: `${today} 24:00:00`,
        }
      }).then(res => {
        const paths = this.$com.confirm(res, 'data.content.route', [])
        const pathData = paths.map((item, i) => {
          return {
            index: i,
            X: item.x,
            Y: item.y,
          }
        })
        this.addGifPoint({name: 'path-points', key: 'index', data: pathData, size: 60, color: '#82DF12'})
      })
    },
    closePersonModal() {
      this.removeGifPoint('selected-point')
      this.removeGifPoint('path-points')
      this.$refs.person.reset()
      this.showPersonModal = false
    },
    handleCommunitySelect(data, iconName = 'red') {
      this.showPersonModal = false
      this.showCommunityModal = false
      if (!Array.isArray(data)) {
        data = [data]
      }
      this.gotoPosition(data[0].X, data[0].Y)
      this.removeGifPoint('selected-point')
      this.removeGifPoint('path-points')
      this.addGifPoint({name: 'selected-point', key: 'COMMUNITYID', labelKey: 'COMMUNITYNAME', data: data[0], icon: `${iconName}.png`})
      this.$ajax.all(...data.map(item => {
        const {COMMUNITYID, CHECKID} = item
        return this.$ajax.post({
          url: this.$api.POST_COMMUNITY_DETAIL,
          params: {
            checkId: CHECKID,
            communityId: COMMUNITYID,
          }
        })
      })).then(res => {
        this.communityData = []
        this.communityTableData = []
        res.forEach(item => {
          const followList = this.$com.confirm(item, 'data.content.fellowList', [])
          const communityData = (this.$com.confirm(item, 'data.content.content', []))[0]
          const followers = followList.map(item => {
            if(item.THEMEID == communityData.TASK_ID) {
              return item.TEAMNAME
            }
          })
          communityData.TE_NAME = (followers.length > 0 && followers.join(',')) || '无'
          communityData.IS_PUBLISH = communityData.IS_PUBLISH == '1' ? '是' : '否'
          const communityTableData = this.$com.confirm(item, 'data.content.indexList', [])
          this.communityData.push(communityData)
          this.communityTableData.push(communityTableData)
        })
        this.showCommunityModal = true
      })
    },
    closeCommunityModal() {
      this.removeGifPoint('selected-point')
      this.removeGifPoint('path-points')
      this.$refs.community.reset()
      this.$refs.community2.reset()
      this.showCommunityModal = false
      this.curTab = 0
    },
    handleThemeSelect(TASK_ID, {START_DATE, END_DATE}) {
      this.$store.commit('SET_THEME_COUNT', 1)
      this.$refs.mapTop.resetPoint()
      this.clearPoints()
      this.showCommunityModal = false
      this.showPersonModal = false
      // TODO  START_DATE, END_DATE看获取检查人列表是否需要用到
      this.curThemeId = TASK_ID
      this.initData(TASK_ID)
    },
    handleFullscreen(type) {
      this.fullScreen = (type != null)
    },
    handleZoom(type) {
      this.map.Invoke({
        ActionName: 'mapzoom',
        Parameters: {
          'zoommode': type == 'plus' ? 'zoomin' : 'zoomout'
        }
      })
    },
    clearPoints() {
      this.removeGifPoint('selected-point')
      this.removeGifPoint('path-points')
      this.removePoint('checked-points')
      this.removePoint('rectify-points')
      this.removePoint('person-points')
    },
    handleReset() {
      this.closeCommunityModal()
      this.closePersonModal()
      this.$refs.theme.reset()
      this.$refs.mapTop.resetPoint()
      this.$store.commit('SET_CURDATE', null)
      this.clearPoints()
      this.initData()
      this.gotoPosition(1, 1, 3)
    },
    handlePointSelect(types) {
      this.closeCommunityModal()
      this.closePersonModal()
      this.clearPoints()
      if (types.indexOf('checked') >= 0 && types.indexOf('rectify') >= 0) {
        this.addPoint({name: 'checked-points', key: 'COMMUNITYID', data: this.$store.state.checkedList, icon: 'blue.png'})
      } else if (types.indexOf('checked') >= 0 && types.indexOf('rectify') < 0) {
        this.addPoint({name: 'checked-points', key: 'COMMUNITYID', data: this.$store.state.originCheckedList, icon: 'blue.png'})
      } else if (types.indexOf('checked') < 0 && types.indexOf('rectify') >= 0) {
        this.addPoint({name:'rectify-points', key: 'COMMUNITYID', data: this.$store.state.rectifyList, icon: 'red.png'})
      }
      if (types.indexOf('person') >= 0) {
        this.addPoint({name:'person-points', key: 'OPER_ID', labelKey: 'TE_NAME', data: this.$store.state.personList, icon: 'person6.png', size: 30})
      }
      this.gotoPosition(1, 1, 3)
    },
  },
  watch: {
    '$store.state.checkedList': {
      handler(cur, past) {
        this.addPoint({name: 'checked-points', key: 'COMMUNITYID', data: cur, icon: 'blue.png'})
      }
    },
    // '$store.state.rectifyList': {
    //   handler(cur, past) {
    //     this.addPoint({name:'rectify-points', key: 'COMMUNITYID', data: cur, icon: 'red.png'})
    //   }
    // },
    '$store.state.personList': {
      handler(cur, past) {
        this.addPoint({name:'person-points', key: 'OPER_ID', labelKey: 'TE_NAME', data: cur, icon: 'person6.png', size: 30})
      }
    },
    '$store.state.curDate': {
      handler(cur, past) {
        this.closeCommunityModal()
        this.closePersonModal()
        this.gotoPosition(1, 1, 3)
        this.$refs.theme.reset()
        this.$refs.mapTop.resetPoint()
        this.clearPoints()
        this.initData()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  $layout()
  grid-template-areas \
    'title title title'\
    'box1 map-top box2'\
    'box1 . box4'\
    'box3 . box4'\
    'box3 . box4'\
    'box3 . box4'\
    'box5 . box6'\
    'box5 map-bottom box6'
  grid-template-rows 4rem 1fr 1fr 1fr 1fr 1fr 1fr 1fr
  grid-template-columns 1fr 2.2fr 1fr
  #map
    width 100%
    height 100vh
    background-color #001021
    position fixed
    top 0
    left 0
    right 0
    bottom 0
  .title
    grid-area title
  .map-top
    grid-area map-top
  .map-bottom
    grid-area map-bottom
  .box1
    grid-area box1
  .box2
    height 20vh
    overflow hidden
    grid-area box2
  .box3
    grid-area box3
  .box4
    grid-area box4
  .box5
    grid-area box5
  .box6
    grid-area box6
  .tabs
    position absolute
    top 1.5%
    right 1rem
    width 60%
    height 2.2rem
    margin-bottom 0.5rem
    >p
      width 50%
      color #fff
      cursor pointer
      padding 0 0.5rem
      line-height 2.6rem
      font-size 1rem
      position relative
      bottom -0.1rem
      transition color .5s
      text-align center
      &.on
        color $color-blue
        font-weight bold
        border-bottom 0.1rem solid $color-blue
</style>
