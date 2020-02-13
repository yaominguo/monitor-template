/** 公共方法 */
import api from '@/server/api'
export default {
  /**
     * 在深层数据结构中取值（为了替代类似 res && res.data && res.data.content这种写法）
     * @param {Object} obj [必填-需要取值的目标对象（例：res）]
     * @param {String} path [必填-数据结构路径（例：'data.content'）]
     * @param {Any} defaultValue [可选-如果取不到值则默认返回该值]
     */
  confirm(obj, path, defaultValue = null) {
    if (!obj || typeof(obj) != 'object' || !path || typeof(path) != 'string') return defaultValue
    const reducer = (accumulator, currentValue) =>
      (accumulator && accumulator[currentValue]) ?
        accumulator[currentValue] :
        defaultValue

    path = path.split('.')
    return path.reduce(reducer, obj)
  },
  /**
     *  -----  柯里化版本 （为了不再重复输入obj这个参数） -----
     * 在深层数据结构中取值（为了替代类似 res && res.data && res.data.content这种写法）
     * @param {Object} obj [必填-需要取值的目标对象（例：res）]
     */
  confirm_currying(obj) {
    if (!obj || typeof(obj) != 'object') return
    return (path, defaultValue = null) => {
      if (!path || typeof(path) != 'string') return
      const reducer = (accumulator, currentValue) =>
        (accumulator && accumulator[currentValue]) ?
          accumulator[currentValue] :
          defaultValue
      path = path.split('.')
      return path.reduce(reducer, obj)
    }
  },
  /**
   * ------  从数据中整理出地图撒点所需的参数 -------
   * @param {Array} data [必填 - 获取的数据]
   * @param {String} key [必填 - 根据哪个关键字区别撒点（一般是id）]
   * @param {String} labelKey [可选 - 传入则显示标签，取哪个值则传哪个值的key]
   * @param {String} icon [可选 - icon名称]
   * @param {Number} size [可选 - icon的大小（默认20）]
   */
  getMapParams({data = [], key, labelKey = null, icon='test.png', size = 22}) {
    const dataArray = []
    const uniqueValueInfos = []
    const fieldJsonArray = []
    for (let e in data[0]) {
      fieldJsonArray.push({
        name: e,
        alias: e,
        type: 'string',
      })
    }
    if (labelKey) {
      fieldJsonArray.push({
        name: 'name',
        alias: '标签',
        type: 'string',
      })
    }
    data.forEach(item => {
      const array = {
        codX: item.X,
        codY: item.Y,
        codZ: 0,
        attrs: {
          ...item,
        },
      }
      if (labelKey) {
        array.attrs.name = item[labelKey]
      }
      dataArray.push(array)
      uniqueValueInfos.push({
        value: item[key],
        label: item[labelKey] || item[key],
        symbol: {
          type: 'point-3d',
          symbolLayers: [
            {
              type: 'icon',
              size,
              resource: {
                href: api.MAP_ICON_BASE + (item.icon || icon),
                // href: 'http://962121.net/hmfmstest/shanghaiwuye/web/dataV/static/person-bg.png',
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
          color: '#47B3FF',
          // color: '#00f2ff',
          haloSize: 0,
          haloColor: 'white',
        },
        labelPlacement: 'center-right',
      }
    }
  }
}
