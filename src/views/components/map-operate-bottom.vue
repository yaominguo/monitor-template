<template>
  <div class="map-operate">
    <img :class="`${curBtn == 'full' ? 'bottom full' : 'bottom'}`" src="@/assets/images/bottom.png" draggable="false"/>
    <div class="btn-list">
      <img
        v-for="btn in btns"
        :key="btn"
        :src="require(`@/assets/images/${btn}.png`)"
        :class="`${btn == curBtn ? 'on' : ''}`"
        @click="handleClick(btn)"
        draggable="false"
        />
    </div>
    <m-trans enter="fadeInUp" leave="fadeOutDown">
      <SearchBar v-if="curBtn == 'search'" class="search-bar"/>
    </m-trans>
  </div>
</template>

<script>
import SearchBar from './search-bar'
export default {
  name: 'MapOperateBottom',
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
        // 'search',
      ],
      curBtn: null,
    }
  },
  methods: {
    handleClick(btn) {
      if (btn == 'search' || btn == 'full') {
        this.curBtn = btn == this.curBtn ? null : btn
      }
      if (btn == 'full') {
        this.$emit('fullscreen', this.curBtn)
        return
      }
      if (btn == 'refresh') {
        this.$emit('reset')
        return
      }
      this.$emit('zoom', btn)
    },
  }
}
</script>

<style lang="stylus" scoped>
.map-operate
  position relative
  >img
    position absolute
    width 18%
    &.bottom
      bottom 0
      left 0
      right 0
      width 100%
      transition all 1s
      &.full
        left -46%
        right -46%
        width 192%
        height 4rem
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
      height 3rem
      cursor pointer
      transition all 0.3s
      &:hover
        transform scale(1.3)
      &.on
        transform scale(1.3)
        transform translate(0, -0.5rem)
  .search-bar
    position absolute
    bottom 80%
    width 50%
    left 0
    right 0
    margin 0 auto
</style>
