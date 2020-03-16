<template>
  <div class="monitor-table">
    <p v-if="title" class="title">{{title}}</p>
    <Row class="row row-title" v-if="mode == '1'">
      <i-col class="col" v-for="col in layout" :key="col.key" :span="col.width" :offset="col.offset || 0">
        <div :style="`text-align: ${col.align || 'left'}; `">{{col.title}}</div>
      </i-col>
    </Row>
    <template v-if="model && model.length > 0 && mode == '1'">
      <div>
        <Row class="row" v-for="(row, rowIndex) in model" :key="rowIndex">
          <i-col class="col" v-for="col in layout" :key="col.key" :span="col.width" :offset="col.offset || 0">
            <template v-if="col.type == 'img'">
              <template v-if="row[col.key] && row[col.key].length > 0">
                <img
                  v-for="(img, i) in row[col.key]"
                  :key="img + i"
                  :src="img"
                  @click="handleView(img)" />
              </template>
            </template>
            <div v-else :style="`text-align: ${col.align || 'left'};color: ${col.color} `">{{row[col.key]}}</div>
          </i-col>
        </Row>
      </div>
    </template>
    <template v-else-if="model && model.length > 0 && mode == '2'">
      <div>
        <Row class="row" v-for="(row, rowIndex) in model" :key="rowIndex">
          <i-col class="col" :span="16">
            <div>
              <p>{{row.INDEXNAME}}</p>
              <p style="color: #aaa;">{{row.REMARK}}</p>
            </div>
          </i-col>
          <i-col class="col" :span="8">
            <template v-if="row.imageList && row.imageList.length > 0">
              <img
                v-for="(img, i) in row.imageList"
                :key="img + i"
                :src="$api.IMG_URL + img.imageName"
                @click="handleView(img.imageName)" />
            </template>
          </i-col>
        </Row>
      </div>
    </template>
    <div v-else class="no-data">
      — 暂无数据 —
    </div>
    <m-modal v-model="showImg">
      <img v-if="showImg" style="width: 100%;" :src="$api.IMG_URL + curSrc"/>
    </m-modal>
  </div>
</template>

<script>
export default {
  name: 'MonitorTable',
  props: {
    title: {
      type: String,
      default: '',
    },
    layout: {
      type: Array,
      default() {
        return []
      }
    },
    model: {
      type: Array,
      default() {
        return []
      }
    },
    mode: {
      type: String,
      default: '1',
    }
  },
  data() {
    return {
      curSrc: null,
      showImg: false,
    }
  },
  methods: {
    handleView(src) {
      this.curSrc = src
      this.showImg = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.monitor-table
  font-size 1rem
  color #fff
  margin-bottom 1rem
  .no-data
    text-align center
    margin-top 0.5rem
  .title
    font-size 1.2rem
    font-weight bold
    color $edgeColor
    padding-bottom 0.5rem
    margin-bottom 1rem
    border-bottom 0.1rem solid $color-map()
  .row
    display flex
    align-items center
    line-height 2.4rem
    &.row-title
      font-weight bold
      font-size 1.1rem
      background-color $color-map()
    &:nth-child(2n)
      background-color $color-map(0.15)
  .col
    padding 0 1rem
    display flex
    align-items center
    flex-wrap wrap
    img
      width 100%
      height 5rem
      margin 0.4rem 0
      cursor pointer
</style>
