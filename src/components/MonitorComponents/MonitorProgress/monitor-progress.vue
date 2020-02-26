<template>
  <div class="monitor-progress" :style="style">
    <div class="progress-container" :style="containerStyle">
      <div class="progress-bar"/>
      <div class="progress-bg" :style="bgStyle"/>
    </div>
    <b v-if="!hideInfo" class="progress-info" :style="infoStyle">
      <m-count :value="percent"/>%
    </b>
  </div>
</template>

<script>
export default {
  name: 'MonitorProgress',
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    color: {
      type: [String, Array],
      default: '#0176fe',
    },
    size: {
      type: Number,
      default: 14,
    },
    'hide-info': {
      type: Boolean,
      default: false,
    },
    'text-inside': {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    style() {
      const size = Math.round(this.size / 10)
      const result = {
        padding: `${(size / 5).toFixed(1)}rem ${(size / 4.5).toFixed(1)}rem`,
      }
      if (!this.hideInfo && !this.textInside) {
        result.width = '85%'
      } else {
        if (this.percent >= 95) {
          result.width = '85%'
        } else {
          result.width = '100%'
        }
      }
      return result
    },
    containerStyle() {
      return {
        height: `${(this.size / 10).toFixed(1)}rem`,
        width: `${this.percent >= 100 ? 100 : this.percent}%`,
      }
    },
    bgStyle() {
      if ('string' === typeof this.color) {
        return {
          background: this.color
        }
      } else {
        return {
          background: `linear-gradient(90deg, ${this.color[0]}, ${this.color[1]})`
        }
      }
    },
    infoStyle() {
      let info = {
        left: '102%'
      }
      if (this.textInside && this.percent < 95) {
        info = {
          left: `${this.percent + 1}%`,
        }
      }
      return {
        ...info,
        fontSize: `${(this.size * 0.7 / 10).toFixed(1)}rem`,
        color: 'string' === typeof this.color ? this.color : this.color[1],
      }
    },
  }
}
</script>

<style lang="stylus" scoped>
$radius = 2rem
.monitor-progress
  position relative
  border-radius $radius
  background rgba(0,0,0,0.18)
  box-shadow inset 0 0 0.2rem 0 #000
  .progress-container
    width 0
    position relative
    border-radius $radius
    transition width 2s ease
    div
      position: absolute
      top 0
      left 0
      width 100%
      height 100%
      border-radius $radius
      &.progress-bar
        z-index 1
        opacity 0.2
        background-size 17rem
        background-image repeating-linear-gradient(45deg, #fff, #fff 0.8rem, transparent 0.8rem, transparent 1.2rem)
        animation rolling 20s linear infinite running
  .progress-info
    display flex
    align-items center
    justify-content center
    position absolute
    left 0
    top 0
    height 100%
    transition left 2s ease
    text-shadow 0 0 0.6rem rgba(255,255,255,0.5)
@keyframes rolling
  to
    background-position-x 17rem
</style>
