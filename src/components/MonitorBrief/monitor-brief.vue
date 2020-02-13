<template>
  <div class="brief-container">
    <span class="label">{{label}}</span>
    <m-count class="count" :value="value"/>
    <span>{{unit}}</span>
  </div>
</template>

<script>
export default {
  name: 'MonitorBrief',
  props: {
    label: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      default: '',
    }
  },
  computed: {
    value() {
      return this.count
    }
  }
}
</script>

<style lang="stylus" scoped>
.brief-container
  display inline-block
  color #fff
  font-size 0.8rem
  .label
    color $cardFontColor
    margin-right 0.5rem
  .count
    font-size 1.4rem
    font-weight bold
</style>
