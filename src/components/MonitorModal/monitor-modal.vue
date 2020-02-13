<template>
<m-trans enter="zoomInUp" leave="zoomOutDown">
  <div v-if="value" class="monitor-modal">
    <div :style="`width:${width}`">
      <img @click="handleClose" class="close-btn" src="@/assets/images/modal-close.png"/>
      <img class="border top" src="@/assets/images/modal-top.png"/>
      <div class="content">
        <div>
          <slot/>
        </div>
      </div>
      <img class="border bottom" src="@/assets/images/modal-bottom.png"/>
    </div>
  </div>
</m-trans>
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
      default: '80%',
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
  top 0
  left 0
  right 0
  bottom 0
  display flex
  align-items center
  justify-content center
  background rgba(0,0,0,0.1)
  z-index 1000
  >div
    position relative
    padding 1rem 0
    background $color-map(0.1)
    color #ccc
    .content
      min-height 30vh
      max-height 70vh
      padding 0 1rem
      overflow-y auto
      overflow-x hidden
    >img
      position absolute
      &.close-btn
        top -0.4rem
        right -2.6rem
        width 2.4rem
        cursor pointer
      &.border
        width 103%
        left -1.5%
        &.top
          top -1rem
        &.bottom
          bottom -1rem
</style>
