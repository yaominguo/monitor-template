<template>
  <div id="app">
    <loader v-show="$store.state.showLoading"/>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import loader from '@/components/MonitorLoader/monitor-loader'
export default {
  name: 'App',
  components: {
    loader,
  }
}
</script>

<style lang="stylus">
@import './assets/css/reset.styl'

@font-face
  font-family DIN
  src url(./assets/font/DIN-Medium.otf)
// @font-face
//   font-family Microsoft YaHei UI
//   src url(./assets/font/Microsoft-YaHei-UI-Bold.ttf)
@font-face
  font-family Pangmenzhengdao
  src url(./assets/font/pangmenzhengdao.ttf)
html, body
  background-color #000 !important
  width 100%
  height 100%
  user-select none
#app
  font-family DIN, 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100%
  height 100%
  font-size 1rem
  overflow: hidden
  color #ccc

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 0.5rem;
}
// /* 滚动槽 */
// ::-webkit-scrollbar-track {
//   -webkit-box-shadow: inset006pxrgba(0,0,0,0.3);
//   /* border-radius: 10px; */
// }
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  /* border-radius: 10px; */
  background:rgba(91, 213, 255, 0.2)
  -webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background:rgba(91, 213, 255, 0.2)
}
</style>
