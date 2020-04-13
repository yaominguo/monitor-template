<template>
  <div class="monitor-scroll" @mouseenter="clearTimer" @mouseleave="start">
    <div ref="scrollContent">
      <slot />
    </div>
    <div v-if="!isShort" ref="subContent">
      <slot />
    </div>
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
      default: 5000,
    },
    mode: {
      type: [Number, String],
      default: 1,
    },
    step: {
      type: Number,
    },
  },
  data() {
    return {
      timer: null,
      index: 0,
    }
  },
  mounted() {
    this.$nextTick(this.start)
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
      const content = this.$refs.scrollContent
      const subContent = this.$refs.subContent
      let height = content.offsetHeight

      this.timer = setInterval(() => {
        if (height <= 0) {
          height = content.offsetHeight
          return
        }
        if (this.index < height) {
          this.index += 1
        } else {
          this.index = 0
        }
        content.style.transform = `translateY(${-this.index}px)`
        subContent.style.transform = `translateY(${-this.index}px)`
      }, 100)
    },
    startMode2() {
      const content = this.$refs.scrollContent
      const subContent = this.$refs.subContent
      const len = this.$com.confirm(content, 'children.length', 0)

      this.timer = setInterval(() => {
        if (this.index < len) {
          this.index += 1
          content.style.transition = 'transform 0.5s'
          subContent.style.transition = 'transform 0.5s'
        } else {
          this.index = 0
          content.style.transition = 'none'
          subContent.style.transition = 'none'
        }
        content.style.transform = `translateY(${-this.step * this.index}rem)`
        subContent.style.transform = `translateY(${-this.step * this.index}rem)`
      }, this.duration)
    },
  },
  watch: {
    length(cur) {
      this.clearTimer()
      this.index = 0
      const content = this.$refs.scrollContent
      const subContent = this.$refs.subContent
      if (content) {
        content.style.transform = 'translateY(0)'
      }
      if (subContent) {
        subContent.style.transform = 'translateY(0)'
      }
      this.$nextTick(this.start)
    }
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
</style>
