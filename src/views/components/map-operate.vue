<template>
  <div class="map-operate">
    <img class="top-left" src="@/assets/images/top-left.png" />
    <img class="top-right" src="@/assets/images/top-right.png" />
    <img class="bottom" src="@/assets/images/bottom.png" />
    <div class="map-menu">
      <img class="menu-btn" src="@/assets/images/list-btn.png"/>
      <div class="menu">
        <div
          v-for="item in mapTypes"
          :key="item"
          :class="`${item == curMapType ? 'on' : ''}`"
          @click="choiceMapType(item)"
          >
          {{item}}
        </div>
      </div>
    </div>
    <div class="btn-list">
      <img
        v-for="btn in btns"
        :key="btn"
        :src="require(`@/assets/images/${btn}.png`)"
        :class="`${btn == curBtn ? 'on' : ''}`"
        @click="handleClick(btn)"
        />
    </div>
    <transition name="custom-classes-transition" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <SearchBar v-if="curBtn == 'search'" class="search-bar"/>
    </transition>
  </div>
</template>

<script>
import SearchBar from './search-bar'
export default {
  name: 'MapOperate',
  components: {
    SearchBar,
  },
  data() {
    return {
      btns: [
        'plus',
        'minus',
        'full',
        'refresh',
        'search',
      ],
      curBtn: null,
      mapTypes: ['暗色地图', '政务地图', '航空影像', '2.5维地图', '简易地形图'],
      curMapType: '暗色地图',
    }
  },
  methods: {
    handleClick(btn) {
      this.curBtn = btn == this.curBtn ? null : btn
    },
    choiceMapType(type) {
      this.curMapType = type
    },
  }
}
</script>

<style lang="stylus" scoped>
.map-operate
  position relative
  .map-menu
    position absolute
    top 1rem
    right 1rem
    &:hover
      >.menu
        display block
    .menu-btn
      width 2rem
      cursor pointer
      position absolute
      right 0
      padding-bottom 1rem
    .menu
      position absolute
      top 2rem
      right 0
      width 10rem
      padding 0.5rem
      border 0.1rem solid $color-map(0.5)
      margin-top 0.5rem
      background $color-map(0.2)
      display none
      >div
        cursor pointer
        color #fff
        text-align center
        line-height 2rem
        &:hover
          background $color-map()
        &.on
          background $color-map()
          color $edgeColor
  >img
    position absolute
    width 18%
    &.top-left
      top 0
      left 0
    &.top-right
      top 0
      right 0
    &.bottom
      bottom 0
      left 0
      right 0
      width 100%
  .btn-list
    display flex
    justify-content space-around
    position absolute
    bottom 1rem
    width 30%
    left 0
    right 0
    margin 0 auto
    >img
      width 3rem
      cursor pointer
      transition all 0.3s
      &:hover
        transform scale(1.3)
      &.on
        transform scale(1.3)
        transform translate(0, -0.5rem)
  .search-bar
    position absolute
    bottom 12%
    width 50%
    left 0
    right 0
    margin 0 auto
</style>
