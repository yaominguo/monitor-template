<template>
  <div class="monitor-scroll" @mouseenter="clearTimer" @mouseleave="start">
    <template v-if="length > 0">
      <div ref="scrollContent">
        <slot />
      </div>
      <div v-if="!isShort">
        <slot />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MonitorScroll',
  props: {
    length: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      default: 6,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    mode: {
      type: [Number, String],
      default: 1,
    }
  },
  data() {
    return {
      timer: null,
      index: -1,
      children: [],
      content: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.content = this.$refs.scrollContent
      this.children = this.$refs.scrollContent.children
      this.start()
    })
  },
  beforeDestroy() {
    this.clearTimer()
  },
  computed: {
    isShort() {
      return this.length <= this.limit
    }
  },
  methods: {
    clearTimer() {
      clearInterval(this.timer)
      this.timer = null
    },
    start() {
      if (this.isShort) return
      if (this.mode == '2') {
        this.startMode2()
      } else {
        this.startMode1()
      }
    },
    startMode1() {
      let height = this.$refs.scrollContent.offsetHeight
      this.timer = setInterval(() => {
        if (height <= 0) {
          height = this.$refs.scrollContent.offsetHeight
          return
        }
        if (this.index < height) {
          this.index += 1
        } else {
          this.index = 0
        }
        this.content.style.marginTop = -this.index + 'px'
      }, 30)
    },
    startMode2() {
      this.timer = setInterval(() => {
        if (this.index < this.length - 1) {
          this.index += 1
        } else {
          this.index = -1
        }
        for(let i=0, len=this.children.length; i<len; i++) {
          const child = this.children[i]
          if (this.index >= i) {
            child.classList.add('on')
          } else {
            child.classList.remove('on')
          }
        }
      }, this.duration)
    },
  },
}
</script>

<style lang="stylus" scoped>
.monitor-scroll
  width 100%
  height 100%
  overflow hidden
  box-sizing border-box
  z-index 10
  .on
    overflow hidden !important
    transition all 0.6s !important
    height 0 !important
    padding 0 auto !important
    margin 0 auto !important
</style>
