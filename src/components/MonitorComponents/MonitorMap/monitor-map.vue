<template>
  <iframe id="map" frameborder="0" scrolling="no" allowtransparency="true" />
</template>

<script>
// import 'https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js'
// import 'http://www.962121.net/gis_system/smimap/mapdebug/ShsmiGis.Bridge.js'

export default {
  name: 'MonitorMap',
  props: {
    mapUrl: {
      type: String,
      default: 'http://www.962121.net/gis_system/smimap/index.html#/',
    },
    iconUrl: {
      type: String,
      default: 'http://www.962121.net/hmfmstest/shanghaiwuye/web/dataV/propertyinspector/static/icons/',
    },
    mapJs: {
      type: String,
      default: 'http://www.962121.net/gis_system/smimap/mapdebug/ShsmiGis.Bridge.js',
    },
  },
  data() {
    return {
      map: null,
    }
  },
  mounted() {
    this.inject().then(this.initMap)
  },
  methods: {
    inject() {
      return new Promise((resolve, reject) => {
        if (document.getElementById('_mapjs')) {
          resolve()
          return
        }
        const mapjs = document.createElement('script')
        mapjs.type = 'text/javascript'
        mapjs.src = this.mapJs
        mapjs.setAttribute('id', '_mapjs')
        document.head.appendChild(mapjs)
        window.onload = () => resolve()
      })
    },
    initMap() {
      const {ShsmiGis} = window
      this.map = new ShsmiGis.Bridge({
        id: 'map',
        url: this.mapUrl,
        onReady: () => {
          // console.log('地图创建完成')
          this.$emit('complete')
          this.addListener()
        }
      })
    },

    addListener() {
      this.map.addEventListener(arg => {
        switch (arg.action.toLowerCase()) {
        case 'selectfeatures':
          if (!arg.layername) return
          this.$emit('event', arg)
          break
        default:
          break
        }
      }, this)
    },

    /**
     * ------  添加图层点 -------
     * @param {String} name [必填 - 图层名]
     * @param {String} mode [默认为'add']
     * @param {String} key [必填 - 根据哪个关键字区别撒点（一般是id）]
     * @param {Array} data [必填 - 撒点数据]
     * @param {String} labelKey [可选 - 传入则显示标签，取哪个值则传哪个值的key]
     * @param {String} icon [可选 - icon名称]
     * @param {Number} size [可选 - icon的大小（默认20）]
     */
    addPoint({name, mode = 'add', key, data, labelKey = null, icon = 'test.png', size = 20, color}) {
      if (!this.map) return
      this.removePoint(name)
      const params = this.getMapParams({data, key, labelKey, icon, size, color})
      params.name = name
      params.mode = mode
      this.map.Invoke({
        ActionName: 'displayJsonData',
        Parameters: JSON.stringify(params),
      })
    },

    /**
     * ------  删除图层点 -------
     * @param {String} name [必填 - 图层名]
     */
    removePoint(name) {
      if (!this.map) return
      this.map.Invoke({
        ActionName: 'displayJsonData',
        Parameters: JSON.stringify({
          name,
          mode: 'delete',
        })
      })
    },

    /**
     * ------  从数据中整理出地图撒点所需的参数 -------
     * @param {Array} data [必填 - 获取的数据]
     * @param {String} key [必填 - 根据哪个关键字区别撒点（一般是id）]
     * @param {String} labelKey [可选 - 传入则显示标签，取哪个值则传哪个值的key]
     * @param {String} icon [可选 - icon名称]
     * @param {Number} size [可选 - icon的大小（默认20）]
     * @param {String} color [可选 - 标签颜色（默认'#47B3FF'）]
     */
    getMapParams({data = [], key, labelKey, icon, size, color = '#47B3FF'}) {
      const dataArray = []
      const uniqueValueInfos = []
      const fieldJsonArray = []
      for (let e in data[0]) {
        fieldJsonArray.push({
          name: e,
          alias: e,
          type: 'string'
        })
      }
      fieldJsonArray.push({
        name: 'name',
        alias: '标签',
        type: 'string',
      })
      data.forEach(item => {
        const array = {
          codX: item.X || item.x,
          codY: item.Y || item.y,
          codZ: 0,
          attrs: {
            ...item,
          },
        }
        if (labelKey) {
          array.attrs.name = item[labelKey]
        } else {
          array.attrs.name = ''
        }
        dataArray.push(array)
        uniqueValueInfos.push({
          value: item[key],
          label: (item[labelKey] || item[key]) + '',
          symbol: {
            type: 'point-3d',
            symbolLayers: [
              {
                type: 'icon',
                size,
                resource: {
                  href: this.iconUrl + (item.icon || icon),
                },
              },
            ]
          }
        })
      })
      return {
        dataArray,
        popupEnabled: false, // 是否打开弹出框
        legendVisible: false, // 图例是否可见
        type: 'point',
        fieldJsonArray,
        renderer: {
          type: 'unique-value',
          field: key,
          defaultLabel: '无数据',
          uniqueValueInfos,
        },
        labelsymbol: {
          symbol: {
            type: 'text',
            color: color,
            // color: '#00f2ff',
            haloSize: 0,
            haloColor: 'white',
          },
          labelPlacement: 'center-right',
        }
      }
    },

    /**
     * ------  添加动态图层点 -------
     * @param {String} name [必填 - 图层名]
     * @param {Array} data [必填 - 撒点数据]
     * @param {String} labelKey [可选 - 传入则显示标签，取哪个值则传哪个值的key]
     * @param {String} icon [可选 - icon名称]
     * @param {Number} size [可选 - icon的大小（默认200）]
     * @param {String} color [可选 - 颜色（默认#00FFFF）]
     */
    addGifPoint({name, data, labelKey, icon, size = 200, color = '#00FFFF'}) {
      if(!this.map) return
      if (!Array.isArray(data)) {
        data = [data]
      }
      const params = {
        name: name,
        mode: 'add',
        datas: data.map(item => {
          return {
            name: labelKey ? item[labelKey] : null,
            value: size,
            corrd: [item.X || item.x, item.Y || item.y],
            color: color,
          }
        }),
        symbol: icon ? ('image://' + this.iconUrl + icon) : 'circle',
        position: 'right',
      }
      this.map.Invoke({
        ActionName: 'flashlayer',
        Parameters: JSON.stringify(params),
      })
    },

    /**
     * ------  移除动态图层点 -------
     * @param {String} name [必填 - 图层名]
     */
    removeGifPoint(name) {
      if(!this.map) return
      this.map.Invoke({
        ActionName: 'flashlayer',
        Parameters: JSON.stringify({
          name,
          mode: 'delete',
        })
      })
    },

    /**
     * ------  聚焦点位 -------
     * @param {String} x [必填 - x坐标]
     * @param {String} y [必填 - y坐标]
     * @param {Number} zoom [可选 - 放大比例（默认为6）]
     */
    focus(x, y, zoom = 6) {
      if (!this.map || !x || !y ) {
        console.error('传入的坐标点不能为空')
        return
      }
      const params = {
        codX: x,
        codY: y,
        zoomlevel: zoom,
      }
      this.map.Invoke({
        ActionName: 'goToPosition',
        Parameters: JSON.stringify(params),
      })
    },

    /**
     * ------  放大 -------
     */
    zoomIn() {
      this.map.Invoke({
        ActionName: 'mapzoom',
        Parameters: {
          'zoommode': 'zoomin',
        }
      })
    },

    /**
     * ------  缩小 -------
     */
    zoomOut() {
      this.map.Invoke({
        ActionName: 'mapzoom',
        Parameters: {
          'zoommode': 'zoomout',
        }
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
#map
  width 100%
  height 100vh
  background-color #001021
  position fixed
  top 0
  left 0
  right 0
  bottom 0
</style>
