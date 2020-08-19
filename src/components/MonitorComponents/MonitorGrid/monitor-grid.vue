<template>
  <div class="monitor-grid" ref="grid" :style="style">
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
  },
  data() {
    return {
      style: {},
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(this.init, 0)
    })
  },
  methods: {
    init() {
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

      const {children} = this.$refs.grid
      for(let i = 0; i < children.length; i++) {
        const child = children[i]
        const area = child.getAttribute('area')
        if (area) {
          child.style.gridArea = area
        }
      }
    },
  },
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
