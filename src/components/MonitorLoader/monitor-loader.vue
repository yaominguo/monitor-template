<template>
  <div class="monitor-loader">
    <div class="loader">
      <div class="outer"/>
      <div class="inner"/>
      <b class="msg">{{msg}}</b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonitorLoader',
  props: {
    msg: {
      type: String,
      default: '加载中 . . .',
    }
  }
}
</script>

<style lang="stylus" scoped>
.monitor-loader
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  background rgba(0,0,0,0.3)
  z-index 9999
  display flex
  align-items center
  justify-content center
  .loader
    position relative
    .msg
      display block
      color #fff
      margin-top 150%
    >div
      border: 0.4rem solid transparent
      border-top-color $color-blue
      border-bottom-color $color-blue
      border-radius 50%
      position absolute
      top 50%
      left 50%
      &.outer
        width 5rem
        height 5rem
        margin-left -3rem
        margin-top -3rem
        animation changeColor 2.5s linear infinite
      &.inner
        width 2.5rem
        height 2.5rem
        margin-left -1.8rem
        margin-top -1.8rem
        animation changeColor 1.5s linear reverse infinite
@keyframes changeColor
  50%
    border-top-color $edgeColor
    border-bottom-color $edgeColor
    transform rotate(180deg)
  100%
    border-top-color $color-blue
    border-bottom-color $color-blue
    transform rotate(360deg)
</style>
