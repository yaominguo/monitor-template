<template>
  <div class="check-comparison">
    <span class="line line1"/>
    <span class="line line2"/>
    <span class="label label1">
      <span class="dot"/>
      <b>开具整改单数：{{count.rectify}}</b>
    </span>
    <span class="label label2">
      <b>完成检查小区数：{{count.checked}}</b>
      <span class="dot"/>
    </span>
    <div>
      <span v-for="i in 36" :key="i" :class="getClass(i)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayCheckComparison',
  computed: {
    count() {
      const sum = this.$store.state.situation
      return {
        rectify: sum[3].count,
        checked: sum[2].count,
      }
    }
  },
  methods: {
    getClass(i) {
      const {rectify, checked} = this.count
      if (checked === 0) {
        return 'default'
      }
      const percent = Math.ceil(36 * rectify / checked)
      if (i <= percent) {
        return 'red'
      } else {
        return 'blue'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.check-comparison
  width 100%
  height 100%
  display flex
  align-items center
  position relative
  .line
    position absolute
    width 1px
    height 2rem
    &.line1
      background red
      left 3%
      top 30%
    &.line2
      background $color-blue
      right 3%
      bottom 30%
  .label
    position absolute
    display flex
    align-items center
    .dot
      display inline-block
      width 0.4rem
      height 0.4rem
      border-radius 50%
    &.label1
      color $color-red
      left 2.4%
      top 22.5%
      .dot
        margin-right 0.5rem
        background red
    &.label2
      color $color-blue
      right 2.2%
      bottom 22.5%
      .dot
        background $color-blue
        margin-left 0.5rem
  >div
    background-color rgba(0,0,0,0.8)
    border-radius 0.5rem
    padding 0.5rem
    height 2rem
    width 100%
    display flex
    justify-content space-around
    >span
      width 2%
      height 100%
      border-radius 0.1rem
      &.default
        background $cardBg
      &.red
        background $color-red
        box-shadow 0 0 0.3rem 0.1rem $color-red
      &.blue
        background $color-blue
        box-shadow 0 0 0.3rem 0.1rem $color-blue
</style>
