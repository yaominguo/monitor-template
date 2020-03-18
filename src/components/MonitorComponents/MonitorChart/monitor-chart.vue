<template>
  <div class="monitor-chart" ref="chart"/>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'MonitorChart',
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
    options: {
      type: Object,
      default() {
        return {
          grid: {},
          legend: {},
          tooltip: {},
          xAxis: {},
          yAxis: {},
        }
      }
    },
    config: {
      type: Object,
      default() {
        return {
          colors: null,
          legend: {
            hide: false,
          },
          xAxis: {},
          yAxis: {},
          tooltip: {},
        }
      }
    },
  },
  data() {
    return {
      dataSource: [],
      defaultColors: [
        '#1890FF',
        '#41D9C7',
        '#2FC25B',
        '#FACC14',
        '#E6965C',
        '#223273',
        '#7564CC',
        '#8543E0',
        '#5C8EE6',
        '#13C2C2',
        '#5CA3E6',
        '#3436C7',
        '#B381E6',
        '#F04864',
        '#D598D9',
      ],
    }
  },
  mounted() {
    if (this.data.length > 0) {
      this.$nextTick(this.init)
    }
  },
  methods: {
    init() {
      this.formatData()
      const chart = echarts.init(this.$refs.chart)
      chart.setOption(this.setting)
    },

    /** 转换数据格式 */
    formatData() {
      this.dataSource = this.config.shape.map(item => {
        const values = []
        this.data.forEach(e => {
          values.push(e[item.key])
        })
        return {name: item.name, data: values}
      })
    },

    /** 设置坐标轴 */
    setAxis(options) {
      const {xAxis, yAxis, shape} = this.config
      if (shape[0].type === 'pie' || shape[0].type === 'donut') return
      const config = {
        data: this.data.map(item => item[(yAxis && yAxis.key) || xAxis.key]),
        boundaryGap: !shape.every(item => item.type === 'line')
      }
      options.xAxis = Object.assign({}, this.defaultOptions.xAxis, config, this.options.xAxis)
      //如果是折线图则用线型的tooltip
      if (shape.some(item => item.type === 'line')) {
        options.tooltip.axisPointer.type = 'line'
      }
      // 如果shape选项中有yAxisIndex字段则变为双Y轴
      if (shape.some(item => item.hasOwnProperty('yAxisIndex'))) {
        // 双y轴设置一样的间隔
        const y1 = [], y2 = []
        shape.forEach((el, i) => {
          if (el.yAxisIndex) {
            y2.push(...this.dataSource[i].data)
          } else {
            y1.push(...this.dataSource[i].data)
          }
        })
        const y1Max = Math.max.apply(null, y1)
        const y2Max = Math.max.apply(null, y2)
        options.yAxis = [
          Object.assign({}, this.defaultOptions.yAxis, {min:0, max: y1Max, interval: y1Max / 5}),
          Object.assign({}, this.defaultOptions.yAxis, {min:0, max: y2Max, interval: y2Max / 5}),
        ]
      } else {
        options.yAxis = Object.assign({}, this.defaultOptions.yAxis, yAxis)
      }

      // 如果key在yAxis上则x、y轴对调
      if (yAxis && yAxis.key) {
        const x = options.xAxis
        const y = options.yAxis
        options.yAxis = x
        options.xAxis = y
      }
    },

    /** 设置图例说明 */
    setLegend(options) {
      const {legend} = this.config
      if (legend && legend.hide) {
        options.grid.top = '5%'
        return
      }
      options.legend = Object.assign({}, this.defaultOptions.legend, this.options.legend)
      if (legend && legend.orient) {
        options.legend.orient = legend.orient
      }
      options.legend.data = this.dataSource.map(item => item.name)
      switch (legend && legend.align) {
      case 'left':
        options.legend.left = '5%'
        break
      case 'right':
        options.legend.right = '5%'
        break
      default:
        break
      }
    },

    /** 绘制图形 */
    setSeries(options) {
      const {shape} = this.config
      // 如果为饼图则数据需是[{name: 'name', value: 1}]格式，且不需要坐标轴
      if (shape[0].type === 'pie') {
        this.setPie(options)
        return
      }
      if (shape[0].type === 'donut') {
        this.setDonut(options)
        return
      }

      options.series = shape.map((item, index) => {
        let color = this.colors[index]
        let shadow = {}
        if (Array.isArray(color)) { // 如果颜色是数组则渐变
          const shadowColor = color[0] || '#0076FF'
          color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: color[0]},
            {offset: 1, color: color[1]}
          ])
          shadow = {
            shadowColor: shadowColor,
            shadowBlur: 6,
          }
        }
        const result = {
          barWidth: '50%',
          barGap: 0,
          smooth: true,
          symbol: 'circle',
          itemStyle: { color, ...shadow },
          data: this.dataSource[index].data || [],
          ...item,
        }
        return result
      })
    },

    // 绘制饼图
    setPie(options) {
      const {shape} = this.config
      options.color = this.colors
      options.series = [{
        label: {
          normal: {
            show: false,
          },
        },
        ...shape[0],
      }]
      if (options.legend && options.legend.data) {
        options.series[0].data = options.legend.data = this.data
      } else {
        options.series[0].data = this.data
      }
      options.tooltip.trigger = 'item'
      this.$delete(options, 'xAxis')
      this.$delete(options, 'yAxis')
    },

    // 绘制同心圆图
    setDonut(options) {
      const {shape} = this.config
      options.color = this.colors
      options.series = this.getDonutConfig(shape)
    },

    getDonutConfig(args) {
      const len = args.length
      if (len <= 0 ) return
      const total = this.data.reduce((acc, cur) => { // 计算数据的value总和
        return acc + cur.value
      }, 0)

      return args.map((e, i) => {
        const rate = Math.round((len - i) * this.fontSize)
        let borderColor = this.colors[i]
        if(Array.isArray(borderColor)) {
          borderColor = {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: borderColor[0] // 0% 处的颜色
            }, {
                offset: 1, color: borderColor[1] // 100% 处的颜色
            }],
            global: false, // 缺省为 false
          }
        }
        return {
          type: 'pie',
          name: e.name,
          clockWise: false, //顺时加载
          hoverAnimation: false, //鼠标移入变大
          radius: [rate, rate + 1],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              borderWidth: this.borderWidth,
              borderColor: borderColor,
            }
          },
          data: [
            this.data[i],
            {
              value: Math.round(total - this.data[i].value),
              name: '',
              itemStyle: this.blackStyle,
            }
          ]
        }
      })
    },
  },
  computed: {
    colors() {
      return this.config.colors || this.defaultColors
    },
    setting() {
      const options = {}
      options.grid = Object.assign({}, this.defaultOptions.grid, this.options.grid)
      options.tooltip = Object.assign({}, this.defaultOptions.tooltip, this.config.tooltip)
      this.setAxis(options)
      this.setLegend(options)
      this.setSeries(options)
      return options
    },
    defaultOptions() {
      return {
        grid: {
          top: '15%',
          left: 'auto',
          right: '5%',
          bottom: '10%',
          width: 'auto',
          height: 'auto',
          containLabel: true,
        },
        legend: {
          width: '100%',
          data: [],
          itemWidth: this.fontSize * 1.5,
          textStyle: {
            color: '#ccc',
            fontSize: this.fontSize,
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          confine: true,
          extraCssText: 'z-index: 999',
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            textStyle: {
              color: '#ccc',
            },
            fontSize: this.fontSize,
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(91,213,255,0.3)'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(91,213,255,0.3)'
            }
          }
        },
        yAxis: {
          nameTextStyle: {
            color: '#fff',
            fontSize: this.fontSize,
          },
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(91,213,255,0.3)'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#ccc',
            },
            fontSize: this.fontSize,
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(91,213,255,0.3)'
            }
          },
        },
      }
    },
    fontSize() {
      return Math.floor(screen.height * 1.48 / 100)
    },
    borderWidth() {
      return this.fontSize * 0.6
    },
    blackStyle() {
      return {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false
          },
          color: 'transparent',
          borderColor: 'rgba(0,0,0,0.1)',
          borderWidth: this.borderWidth,
        },
      }
    },
  },
  watch: {
    data(cur, past) {
      if (cur && cur !== past && cur.length > 0) {
        this.init()
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
.monitor-chart
  height 100%
  width 100%
</style>
