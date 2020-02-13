<template>
  <div class="search-bar">
    <div class="btn-wrapper">
      <div
        v-for="btn in btns"
        :key="btn"
        :class="`${btn == curBtn ? 'on' : ''}`"
        @click="handleClick(btn)"
        >
        {{btn}}
      </div>
    </div>
    <div class="input-wrapper">
      <input v-model="searchKey" @keyup.enter="handleSearch" type="text" placeholder="请输入">
      <img @click="handleSearch" src="@/assets/images/search.png"/>
      <span class="edge left"/>
      <span class="edge right"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      curBtn: '小区查询',
      btns: ['小区查询', '检查主题查询'],
      searchKey: null,
    }
  },
  methods: {
    handleClick(btn) {
      this.curBtn = btn
    },
    handleSearch() {
      console.log(this.searchKey)

    }
  }
}
</script>

<style lang="stylus" scoped>
.search-bar
  .btn-wrapper
    display flex
    align-items center
    margin-bottom 0.5rem
    >div
      color #ccc
      cursor pointer
      transition all 0.3s
      &:hover
        color $edgeColor
      &.on
        color $edgeColor
        transform scale(1.1)
        font-weight bold
      &+div
        &::before
          display inline-block
          content ''
          width 0.1rem
          background #ccc
          height 0.8rem
          margin 0 0.5rem 0 1rem
  .input-wrapper
    position relative
    border-bottom 0.1rem solid $edgeColor
    height 3rem
    .edge
      display block
      position absolute
      bottom 0
      width 0
      height 0
      border 0.2rem solid transparent
      border-bottom-color $edgeColor
      &.left
        left 0
        border-left-color $edgeColor
      &.right
        right 0
        border-right-color $edgeColor
    input
      display block
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      padding 0 1rem
      line-height 3rem
      color #ccc
      border none
      outline none
      font-size 1rem
      background-color #000
    img
      position absolute
      cursor pointer
      top 0.5rem
      right 1rem
      width 2rem
</style>
