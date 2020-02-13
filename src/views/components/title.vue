<template>
  <div id="title" ref="title">
    <span class="moment date" @mouseenter="openDatePicker = true" @mouseleave="openDatePicker = false">
      <DatePicker @on-change="handleDateChange" :value="curDate" :options="options" class="date-picker" :open="openDatePicker" type="date">
        <span>{{curDate}}</span>
      </DatePicker>
    </span>
    <span class="moment time">{{time}}</span>
    <img :src="bgImg" draggable="false"/>
    <div class="theme-wrapper" @mouseenter="show = true" @mouseleave="show = false">
      <img class="arrow" :src="arrowImg" draggable="false"/>
      <m-trans enter="zoomInDown" leave="zoomOutUp">
        <div class="theme-menu" v-show="show">
          <div class="edge top-left" />
          <div class="edge top-right" />
          <div class="edge bottom-left" />
          <div class="edge bottom-right" />
          <p
            v-for="theme in themes"
            :key="theme"
            :class="`${theme == curTheme ? 'on' : ''}`"
            @click="curTheme = theme">
            {{theme}}
          </p>
        </div>
      </m-trans>
    </div>
    <p><slot /></p>
  </div>
</template>

<script>
const titleBg = require('@/assets/images/title-bg.png')
const titleArrow = require('@/assets/images/title-arrow.png')
export default {
  name: 'ThemeTitle',
  data() {
    return {
      openDatePicker: false,
      show: false,
      bgImg: titleBg,
      arrowImg: titleArrow,
      timer: null,
      time: null,
      curTheme: '物业督查实时专题图',
      themes: [
        '物业督查实时专题图',
        '保障中心共有产权房系统',
        '小区检查轨迹',
        '市住宅物业防汛防台灾害上报系统',
        '962121热线平台投诉历史分析',
      ],
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.time = `${this.$moment().format('dddd')} ${this.$moment().format('LTS')}`
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  computed: {
    curDate() {
      const date = this.$store.state.curDate
      return date ? this.$moment(date).format('LL') : this.$moment().format('LL')
    },
    options() {
      return {
        disabledDate: (date) => {
          return this.$moment(date).isAfter(this.$moment())
        }
      }
    }
  },
  methods: {
    handleDateChange(date) {
      this.$store.commit('SET_CURDATE', date)
      this.openDatePicker = false
    },
  }
}
</script>

<style lang="stylus" scoped>
$theme-selected()
  position absolute
  display block
  content ''
  width 0
  height 0
  border 0.5rem solid $edgeColor
  top 1rem
  transform rotate(45deg)
#title
  display flex
  align-items center
  justify-content center
  position relative
  background-size cover
  background-position center
  font-family $font-pang
  .theme-menu
    font-family $font-din
    position absolute
    min-height 10rem
    width 26rem
    padding 1rem
    text-align center
    color #ccc
    font-weight bold
    background $color-map(0.1)
    left 0
    right 0
    top 6rem
    margin auto
    border 0.1rem solid $color-map()
    >p
      font-size 1.2rem
      line-height 3rem
      cursor pointer
      position relative
      overflow hidden
      &:hover
        color $edgeColor
      &.on
        font-size 1.4rem
        color $edgeColor
        background $color-map(0.2)
        &:before
          $theme-selected()
          margin-left -0.5rem
          border-left-color transparent
          border-bottom-color transparent
        &:after
          $theme-selected()
          right 0
          margin-right -0.5rem
          border-right-color transparent
          border-top-color transparent
    .edge
      position absolute
      width 2rem
      height 2rem
      border 0.3rem solid $edgeColor
      &.top-left
        top -0.1rem
        left -0.1rem
        border-right none
        border-bottom none
      &.top-right
        top -0.1rem
        right -0.1rem
        border-left none
        border-bottom none
      &.bottom-left
        bottom -0.1rem
        left -0.1rem
        border-right none
        border-top none
      &.bottom-right
        bottom -0.1rem
        right -0.1rem
        border-left none
        border-top none
  .moment
    z-index 100
    position absolute
    font-size 1.2rem
    color #fff
    width 15rem
    &.date
      left 20%
      top 34%
      cursor pointer
    &.time
      right 13%
      top 34%
  img
    position absolute
    width 100%
    height 130%
    top 0
    left 0
    &.arrow
      width 3rem
      height 2rem
      left 0
      right 0
      margin auto
      top 120%
      cursor pointer
  >p
    font-size 2.8rem
    margin-top 1rem
    text-shadow 0 0.2rem 0.4rem #25e7f6
    background-clip text
    -webkit-background-clip text
    color #25e7f6
    -webkit-text-fill-color transparent
    background-image linear-gradient(to bottom, #fff, #25e7f6)
</style>
