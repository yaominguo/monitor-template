<template>
  <IOdometer
    class="monitor-flip"
    :value="num"
  />
</template>

<script>
import IOdometer from 'vue-odometer'
export default {
  name: 'MonitorFlip',
  components: {
    IOdometer,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      num: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.num = this.value
    })
  },
}
</script>

<style lang="stylus" scoped>
.monitor-flip
  font-family $font-din
</style>
<style lang="stylus">
@import 'odometer/themes/odometer-theme-default.css'
.monitor-flip
  .odometer-digit
    background linear-gradient($color-map() 47%, transparent 50%, $color-map() 53%)
    margin-right 0.4rem
    padding 0 0.4rem
  .odometer-digit-inner
    padding 0 0.4rem
</style>
