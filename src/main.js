// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Row, Col, Select, Option, DatePicker} from 'view-design'
import ajax from '@/server/ajax'
import api from '@/server/api'
import common from '@/util/common'
import moment from 'moment'
import MonitorComponents from '@/components/MonitorComponents'
import 'view-design/dist/styles/iview.css'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

Vue.config.productionTip = false
Vue.prototype.$ajax = ajax
Vue.prototype.$api = api
Vue.prototype.$com = common
Vue.prototype.$moment = moment
Vue.use(MonitorComponents)
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
