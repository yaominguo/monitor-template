<template>
  <div class="monitor-brief">
    <img v-if="icon" :src="icon"/>
    <div>
      <p class="label" :style="`color:${color}`">{{label}}</p>
      <count class="count" :style="`font-size:${size}`" :value="value" :decimal="decimal"/>
      <span v-if="unit">{{unit}}</span>
    </div>
  </div>
</template>

<script>
import count from '../MonitorCount/monitor-count'
export default {
  name: 'MonitorBrief',
  components: {
    count,
  },
  props: {
    icon: {},
    decimal: {
      type: Number,
      default: 0,
    },
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
    },
    color: {
      type: String,
      default: '#fff'
    },
    size: {
      type: String,
      default: '1.8rem'
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
.monitor-brief
  width 100%
  display flex
  align-items center
  >img
    width 2.8rem
    margin-right 1rem
  >div
    flex 1
    .count
      font-family $font-pang
      font-size 1.8rem
    >span
      font-family $font-pang
</style>
