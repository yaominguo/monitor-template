<template>
  <div class="community-list">
    <template v-if="list && list.length > 0">
      <div
      v-for="(item, index) in list"
      :key="index"
      :class="`${getClass(index + 1)} ${curCommunity == (item.COMMUNITYID + item.TASKID) ? 'on' : ''}`"
      @click="handleClick(item)"
      >
        <div class="dot" />
        <b :title="item.COMMUNITYNAME">{{item.COMMUNITYNAME}}</b>
      </div>
    </template>
    <template v-else>
      <p class="no-msg">暂无数据</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CommunityList',
  data() {
    return {
      curCommunity: null,
    }
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getClass(i) {
      const row = Math.ceil(i / 2)
      if (row % 2 === 0) {
        return 'row-even'
      } else {
        return 'row-odd'
      }
    },
    handleClick(data) {
      this.curCommunity = data.COMMUNITYID + data.TASKID
      this.$emit('select', data)
    },
    reset() {
      this.curCommunity = null
    }
  },
}
</script>

<style lang="stylus" scoped>
.community-list
  display flex
  flex-wrap wrap
  width 100%
  // height 100%
  .no-msg
    width 100%
    font-weight bold
    text-align center
    color #ccc
    margin-top 30%
  >div
    display flex
    align-items center
    justify-content flex-start
    width 47%
    color #fff
    padding 0 0.5rem
    height 3rem
    margin 0 0.3rem
    cursor pointer
    b
      display inline-block
      flex 1
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    &.row-even
      background rgba(0,0,0,0.2)
      .dot
        background $color-green
    .dot
      width 0.2rem
      height 1rem
      background gold
      margin-right 0.5rem
    &.on
      $selected()
</style>
