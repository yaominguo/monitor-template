<template>
  <div class="theme-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      :class="`${item.TASK_ID == curId ? 'on' : ''}`"
      @click="handleClick(item)"
      >
      <div class="flag" :style="`background-image:url(${require('@/assets/images/flag-bg.png')})`">{{flagFormat(item.DEPTTYPE)}}</div>
      <div class="content">
        <p class="title" :title="item.TASK_NAME">
          <b>{{item.TASK_NAME}}</b>
          <span>{{item.THEMETYPE}}</span>
        </p>
        <p class="date">{{dateFormat(item.START_DATE)}} ~ {{dateFormat(item.END_DATE)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThemeList',
  data() {
    return {
      curId: null,
    }
  },
  computed: {
    list() {
      return this.$store.state.themeList
    },
  },
  methods: {
    handleClick(data) {
      if (this.curId == data.TASK_ID) {
        this.curId = null
      } else {
        this.curId = data.TASK_ID
      }
      this.$emit('select', this.curId, data)
    },
    dateFormat(date) {
      if (!date) return ''
      return this.$moment(date).format('YYYY-MM-DD')
    },
    flagFormat(val) {
      if (val.indexOf('房办') >= 0) return '街'
      return val.charAt(0)
    },
    reset() {
      this.curId = null
    },
  },
}
</script>

<style lang="stylus" scoped>
.theme-list
  width 100%
  height 100%
  >div
    display flex
    align-items center
    padding 0.5rem 0 0.5rem 0.5rem
    cursor pointer
    transition all 0.6s
    background transparent
    border 0.1rem solid transparent
    &.on
      $selected()
    .flag
      display flex
      align-items center
      justify-content center
      width 3rem
      height 3rem
      background-position center
      background-size cover
      color $edgeColor
      font-size 1.5rem
      font-weight bold
      margin-right 0.5rem
    .content
      .title
        color #fff
        display flex
        align-items center
        >b
          display inline-block
          max-width 12rem
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
        >span
          font-size 0.9rem
          height 1.5rem
          line-height 1.5rem
          color $edgeColor
          border 0.1rem solid $edgeColor
          border-radius 0.3rem
          padding 0 0.2rem
          background-color $color-map()
          margin-left 0.5rem
          box-sizing border-box
      .date
        font-size 0.9rem
        color #aaa
</style>
