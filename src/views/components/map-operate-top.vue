<template>
<m-trans enter="fadeIn" leave="fadeOut">
  <div class="map-operate">
    <img class="top-left" src="@/assets/images/top-left.png" draggable="false"/>
    <img class="top-right" src="@/assets/images/top-right.png" draggable="false"/>
    <div class="map-menu">
      <img class="menu-btn" src="@/assets/images/list-btn.png" draggable="false"/>
      <!-- <div class="menu">
        <div
          v-for="item in mapTypes"
          :key="item"
          :class="`${item == curMapType ? 'on' : ''}`"
          @click="choiceMapType(item)"
          >
          {{item}}
        </div>
      </div> -->
      <div class="point-menu">
        <div
          v-for="item in points"
          :key="item.key"
          :class="`${curPoints.indexOf(item.key) >= 0 ? 'on' : ''}`"
          @click="choicePoint(item.key)"
        >
          <input type="checkbox" :checked="curPoints.indexOf(item.key) >= 0"/>
          <b>{{item.name}}</b>
        </div>
      </div>
    </div>
  </div>
</m-trans>
</template>

<script>
export default {
  name: 'MapOperateTop',
  data() {
    return {
      mapTypes: ['暗色地图', '政务地图', '航空影像', '2.5维地图', '简易地形图'],
      curMapType: '暗色地图',
      points: [
        {key: 'person', name: '检查人员'},
        {key: 'checked', name: '完成检查小区'},
        {key: 'rectify', name: '开具整改单小区'},
      ],
      curPoints: ['person', 'checked', 'rectify'],
    }
  },
  methods: {
    choiceMapType(type) {
      this.curMapType = type
    },
    choicePoint(key) {
      const index = this.curPoints.findIndex(el => el == key)
      if (index >= 0) {
        this.curPoints.splice(index, 1)
      } else {
        this.curPoints.push(key)
      }
      this.$emit('select', this.curPoints)
    },
    resetPoint() {
      this.curPoints = ['person', 'checked', 'rectify']
    },
  }
}
</script>

<style lang="stylus" scoped>
$theme-selected()
  content ''
  display block
  position absolute
  top 1rem
  transform rotate(45deg)
  width 0
  height 0
  border 0.5rem solid $edgeColor
.map-operate
  position relative
  height 0
  .map-menu
    position absolute
    top 1rem
    right 1rem
    &:hover
      >.menu
        display block
      >.point-menu
        display block
    .menu-btn
      width 2rem
      cursor pointer
      position absolute
      right 0
      padding-bottom 1rem
    .menu
      position absolute
      top 2rem
      right 0
      width 10rem
      padding 0.5rem
      border 0.1rem solid $color-map(0.5)
      margin-top 0.5rem
      background $color-map(0.2)
      display none
      >div
        cursor pointer
        color #fff
        text-align center
        line-height 2rem
        &:hover
          background $color-map()
        &.on
          background $color-map()
          color $edgeColor
    .point-menu
      display none
      position absolute
      top 2rem
      right 0
      min-width 12rem
      padding 0.5rem
      border 0.1rem solid $color-map(0.5)
      margin-top 0.5rem
      background $color-map(0.2)
      >div
        display flex
        align-items center
        cursor pointer
        color #ccc
        line-height 2.4rem
        &.on
          color $edgeColor
        input
          margin 0 0.5rem
          cursor pointer
  >img
    position absolute
    width 18%
    &.top-left
      top 0
      left 0
    &.top-right
      top 0
      right 0
</style>
