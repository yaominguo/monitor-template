<template>
<ICountUp
  :delay="delay"
  :endVal="value"
  :options="config"
  @ready="onReady"
  />
</template>

<script>
import ICountUp from 'vue-countup-v2'
export default {
  name: 'MonitorCount',
  components: {
    ICountUp,
  },
  props: {
    delay: {
      type: Number,
      default: 500,
    },
    value: {
      type: Number,
      default: 0,
    },
    decimal: { // 默认保留2位小数点
      type: Number,
      default: 2,
    },
    options: {
      type: Object,
      default() {
        return {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: '',
        }
      }
    },
    autoUpdate: {
      type: Boolean,
      default: false,
    },
    updateDuration: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    config() {
      return Object.assign(this.options, {decimalPlaces: this.decimal})
    }
  },
  methods: {
    onReady(instance, countup) {
      if (!this.autoUpdate) return
      setTimeout(() => {
        instance.reset()
        instance.update(instance.endVal)
      }, 1000 * 60 * this.updateDuration)
    },
  }
}
</script>
