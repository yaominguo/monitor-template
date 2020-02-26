<template>
  <div class="monitor-form">
    <p v-if="title" class="title">{{title}}</p>
    <Row class="row" v-for="(row, rowIndex) in layout" :key="rowIndex">
      <i-col class="col" v-for="(col, key) in row" :key="key" :span="col.width" :offset="col.offset || 0">
        <div :style="`text-align: ${col.align || 'left'}; width:${labelWidth}rem;`">{{col.label}}：</div>
        <img v-if="col.type == 'img'" @click="handleView(model[key])" :src="$api.IMG_URL + model[key]"/>
        <div v-else class="content">{{model[key]}}</div>
      </i-col>
    </Row>
    <m-modal v-model="showImg">
      <img v-if="showImg" style="width: 100%;" :src="$api.IMG_URL + curSrc"/>
    </m-modal>
  </div>
</template>

<script>
export default {
  name: 'MonitorForm',
  props: {
    title: {
      type: String,
      default: '',
    },
    labelWidth: {
      type: Number,
      default: 10,
    },
    layout: {
      type: Array,
      default() {
        return []
      }
    },
    model: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      showImg: false,
      curSrc: null,
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
.monitor-form
  font-size 1rem
  color #fff
  margin-bottom 1rem
  .title
    font-size 1.2rem
    font-weight bold
    color $edgeColor
    padding-bottom 0.5rem
    margin-bottom 1rem
    border-bottom 0.1rem solid $color-map()
  .row
    line-height 2.4rem
    // &:nth-child(2n)
    //   background-color $color-map(0.15)
  .col
    display flex
    align-items center
    padding 0 1rem
    &:nth-child(2n+1)
      background-color $color-map(0.15)
    .content
      flex 1
    img
      width 25%
      height 5rem
      margin 0.5rem 0
      cursor pointer
</style>
