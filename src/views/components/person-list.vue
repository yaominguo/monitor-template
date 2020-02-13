<template>
  <div class="person-list">
    <template v-if="list && list.length > 0">
      <div
        v-for="(item, index) in list"
        :key="index"
        :class="`${(item.OPER_ID + item.TASK_ID) == curId ? 'on' : ''}`"
        @click="handleClick(item)"
        >
        <img src="@/assets/images/location.png"/>
        <b>{{item.TE_NAME}}</b>
      </div>
    </template>
    <template v-else>
      <p class="no-msg">暂无数据</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'PersonList',
  data() {
    return {
      curId: null,
    }
  },
  computed: {
    list() {
      return this.$store.state.personList
    }
  },
  methods: {
    handleClick(data) {
      this.curId = data.OPER_ID + data.TASK_ID
      this.$emit('select', data)
    },
    reset() {
      this.curId = null
    }
  },
}
</script>

<style lang="stylus" scoped>
.person-list
  display flex
  flex-wrap wrap
  width 100%
  // height 100%
  .no-msg
    width 100%
    font-weight bold
    text-align center
    color #ccc
    margin-top 15%
  >div
    display flex
    align-items center
    width 33.3%
    height 3rem
    padding 0.5rem 1rem
    cursor pointer
    &.on
      $selected()
    img
      width 1rem
      margin-right 0.8rem
    b
      color #fff
</style>
