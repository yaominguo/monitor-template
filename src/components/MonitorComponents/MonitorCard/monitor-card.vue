<template>
<m-animate :enter="enter" :leave="leave">
  <div class="monitor-card">
    <component :is="card" v-bind="$attrs" :title="title">
      <slot/>
    </component>
  </div>
</m-animate>
</template>

<script>
export default {
  name: 'MonitorCard',
  props: {
    title: {
      type: String,
    },
    mode: {
      type: [String, Number],
      default: '1',
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
  computed: {
    card() {
      return () => import(`./mode${this.mode}`)
    }
  },
}
</script>

<style lang="stylus" scoped>
$edgeWidth = 0
$size()
  height 100%
  width 100%
.monitor-card
  $size()
  $blur()
  overflow hidden
  /deep/ .card-wrapper
    $size()
    padding 0.5rem 1rem
    position relative
    .card-content
      height calc(100% - 2rem)
      overflow-y auto
      overflow-x hidden
</style>
