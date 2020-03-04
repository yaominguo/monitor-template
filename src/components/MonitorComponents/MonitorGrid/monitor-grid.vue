<template>
  <div v-show="show" class="monitor-grid" ref="grid" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'MonitorGrid',
  props: {
    template: {
      type: [String, Array],
      required: true,
    },
    columns: {
      type: String,
    },
    rows: {
      type: String,
    },
    gap: {
      type: String,
    },
    bgImg: {
      type: String,
    },
    ready: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      style: {},
      show: false,
    }
  },
  mounted() {
    this.$nextTick(this.init)
  },
  methods: {
    init() {
      this.show = true
      const children = this.$refs.grid.children
      for(let i = 0; i < children.length; i++) {
        const child = children[i]
        const area = child.getAttribute('area')
        if (area) {
          child.style.gridArea = area
        }
        if (child.getAttribute('id') !== 'map') {
          if (this.ready) {
            child.style.opacity = 1
            child.style.transform = 'scale(1)'
          } else {
            child.style.opacity = 0
            child.style.transform = 'scale(2)'
            child.style.transition = 'opacity 1s, transform 1s'
          }
        }
      }
      this.setUp()
    },
    setUp() {
      let templateAreas = this.template
      if (Array.isArray(templateAreas)) {
        let result = ''
        templateAreas.forEach(item => {
          result += `'${item}'`
        })
        templateAreas = result
      }
      this.style = {
        'grid-template-areas': templateAreas,
        'grid-template-columns': this.columns,
        'grid-template-rows': this.rows,
        'grid-gap': this.gap,
        'padding': this.gap,
        'background-image': `url(${this.bgImg})`
      }
    }
  },
  watch: {
    ready(cur, past) {
      if (cur !== past) {
        this.init()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.monitor-grid
  width 100%
  height 100%
  background-size cover
  background-position center
  background-color #061627
  position relative
  display grid
  grid-gap 1rem
  padding 1rem
</style>
