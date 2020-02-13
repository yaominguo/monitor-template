/** 公共方法 */
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
}
