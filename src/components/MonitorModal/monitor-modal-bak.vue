<template>
<transition name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
  <div v-if="value" class="monitor-modal" ref="modal">
    <img @click="handleClose" class="close-btn" src="@/assets/images/title-arrow.png"/>
    <img class="border left" src="@/assets/images/modal-right.png"/>
    <div class="content">
      <div>
        <slot/>
      </div>
    </div>
    <img class="border right" src="@/assets/images/modal-right.png"/>
  </div>
</transition>
</template>

<script>
export default {
  name: 'MonitorModal',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '40%',
    }
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
.monitor-modal
  position fixed
  top 4rem
  right 1rem
  bottom 0.6rem
  z-index 1000
  width 23.8vw
  padding 1rem 0
  background $color-map(0.1)
  color #ccc
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
