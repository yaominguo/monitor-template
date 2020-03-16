<template>
  <div class="monitor-step">
    <div v-for="(step, i) in steps" :key="i" :class="`item ${i == current ? 'on' : ''}`">
      <p :title="step.name">{{step.name}}</p>
      <div v-if="i <= current" class="icon" :style="`background-image:url(${require('@/assets/images/true.png')})`"/>
      <div v-else class="none"/>
    </div>
    <div class="lines">
      <div v-for="(line, i) in lines" :key="i" :class="`line ${i < current ? 'done' : ''}`" :style="`width:${lineWidth}`"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonitorStep',
  props: {
    steps: {
      type: Array,
      required: true,
    },
    current: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    lines() {
      const len = this.steps.length
      if (len > 2) return len - 1
      return 1
    },
    lineWidth() {
      return `${Math.round(100 / this.lines)}%`
    }
  }
}
</script>

<style lang="stylus" scoped>
.monitor-step
  width 90%
  margin 0.5rem auto
  display flex
  justify-content space-between
  position relative
  font-size 0.9rem
  .lines
    display flex
    position absolute
    bottom 0.35rem
    width 95%
    margin 0 auto
    z-index -1
    >.line
      height 0.3rem
      background rgba(0,0,0,0.8)
      border-radius 1rem
      margin-left 0.5rem
      &.done
        background linear-gradient(to right, #3391ff, $edgeColor)
  .item
    text-align center
    width 1rem
    position relative
    .icon
      width 1rem
      height 1rem
      border-radius 50%
      background-color $edgeColor
      background-position center
      background-size 60%
      background-repeat no-repeat
    .none
      width 0.8rem
      height 0.8rem
      border 0.2rem solid $edgeColor
      border-radius 50%
      transform translateY(10%)
    p
      width 5rem
      margin 0.5rem 50%
      transform translateX(-50%)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      color #aaa
    &.on
      .icon
        transform scale(1.2)
        animation shine 2s alternate infinite ease-in-out
      p
        color $edgeColor
        font-size 1rem
        font-weight bold
@keyframes shine {
  from {
    box-shadow none
  }
  to {
    box-shadow 0 0 1rem 0.1rem #fff
  }
}
</style>
