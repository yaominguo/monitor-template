<template>
  <div class="monitor-step">
    <div class="lines" :style="setTop">
      <div class="line done" :style="`width:${doneWidth}%`"/>
      <div class="line" :style="`width:${notWidth}%`"/>
    </div>
    <div v-for="(step, i) in steps" :key="i" :class="`item ${i == current ? 'on' : ''}`">
      <p :title="step.name">{{step.name}}</p>
      <div ref="icon" v-if="i <= current" class="icon" :style="`background-image:url(${require('@/assets/images/true.png')})`"/>
      <div v-else class="none"/>
      <span class="msg" :title="step.msg" v-html="msg[i]"/>
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
    msg: {
      type: Array,
      default() {
        return []
      },
    }
  },
  computed: {
    setTop() {
      if (this.msg.length > 0) {
        return {top: '42%'}
      }
      return {top: '57%'}
    },
    linePercent() {
      const len = this.steps.length
      if (len > 2) return 100 / (len - 1)
      return 100
    },
    doneWidth() {
      const index = Number(this.current)
      if (Number.isNaN(index)) {
        console.error('Props: "current" is NaN!')
        return
      }
      return Math.round(this.linePercent * index)
    },
    notWidth() {
      return 100 - this.doneWidth
    }
  }
}
</script>

<style lang="stylus" scoped>
.monitor-step
  width 90%
  margin 0.5rem auto 0
  display flex
  justify-content space-between
  position relative
  font-size 0.9rem
  .lines
    display flex
    position absolute
    width 100%
    left -0.5rem
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
    .msg
      display inline-block
      font-size 0.6rem
      width 4rem
      transform translateX(-50%)
      margin 0.2rem 50%
      font-weight normal
      color #aaa
    p
      width 5rem
      margin 0.5rem 50%
      transform translateX(-50%)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      color #aaa
      font-size 0.8rem
    &.on
      .icon
        transform scale(1.2)
        animation shine 2s alternate infinite ease-in-out
      p
        color $edgeColor
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
