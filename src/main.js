// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import echarts from 'echarts'
import {Row, Col, Select, Option, DatePicker} from 'view-design'
import animate from 'animate.css'
import ajax from '@/server/ajax'
import api from '@/server/api'
import common from '@/util/common'
import moment from 'moment'
import MonitorCard from '@/components/MonitorCard'
import MonitorCount from '@/components/MonitorCount'
import MonitorModal from '@/components/MonitorModal'
import MonitorDrawer from '@/components/MonitorDrawer'
import MonitorForm from '@/components/MonitorForm'
import MonitorTable from '@/components/MonitorTable'
import MonitorTrans from '@/components/MonitorTrans'
import MonitorGrid from '@/components/MonitorGrid'
import MonitorTitle from '@/components/MonitorTitle'
import 'view-design/dist/styles/iview.css'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.config.productionTip = false
// Vue.prototype.$echarts = echarts
Vue.prototype.$ajax = ajax
Vue.prototype.$api = api
Vue.prototype.$com = common
Vue.prototype.$moment = moment
Vue.use(animate)
Vue.use(MonitorCard)
Vue.use(MonitorCount)
// Vue.use(MonitorFlip)
// Vue.use(MonitorBrief)
// Vue.use(MonitorProgress)
// Vue.use(MonitorChart)
Vue.use(MonitorModal)
Vue.use(MonitorDrawer)
Vue.use(MonitorForm)
Vue.use(MonitorTable)
Vue.use(MonitorTrans)
Vue.use(MonitorGrid)
Vue.use(MonitorTitle)
Vue.component('Row', Row)
Vue.component('i-col', Col)
Vue.component('Select', Select)
Vue.component('Option', Option)
Vue.component('DatePicker', DatePicker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
