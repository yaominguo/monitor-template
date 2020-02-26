<template>
<m-animate :enter="enter" :leave="leave">
  <div v-if="value" class="monitor-drawer" style="animation-duration: 500ms">
    <img @click="handleClose" class="close-btn" src="@/assets/images/title-arrow.png"/>
    <img class="border left" src="@/assets/images/modal-right.png"/>
    <div class="content">
      <div>
        <slot/>
      </div>
    </div>
    <img class="border right" src="@/assets/images/modal-right.png"/>
  </div>
</m-animate>
</template>

<script>
export default {
  name: 'MonitorDrawer',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '40%',
    },
    enter: {
      type: String,
      default: 'fadeInRight',
    },
    leave: {
      type: String,
      default: 'fadeOutRight',
    },
  },
  methods: {
    handleClose() {
      this.$emit('close')
      this.$emit('input', false)
    }
  },
}
</script>

<style lang="stylus" scoped>
.monitor-drawer
  position fixed
  top 4rem
  right 1rem
  bottom 0.6rem
  z-index 1000
  width 26vw
  padding 1rem 0
  background $cardBg
  color #ccc
  $blur()
  .content
    height 100%
    padding 0 1rem
    overflow-y auto
    overflow-x hidden
  >img
    position absolute
    &.close-btn
      top 0
      bottom 0
      margin auto
      width 3rem
      left -3rem
      transform rotate(270deg)
      cursor pointer
    &.border
      width 2rem
      height 102%
      top -0.5rem
      bottom 0
      &.left
        transform rotate(180deg)
        left -1rem
      &.right
        right -1rem
</style>
