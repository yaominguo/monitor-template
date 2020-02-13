<template>
  <div class="situation-container">
    <div v-for="(item, index) in list" :key="item.label" :class="`box box${index + 1}`">
      <b>{{item.label}}</b>
      <div>
        <img :src="require(`@/assets/images/${item.icon}.png`)" />
        <span><m-count :value="item.count" :decimal="0" /></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayCheckSituation',
  computed: {
    list() {
      return this.$store.state.situation
    }
  }
}
</script>

<style lang="stylus" scoped>
.situation-container
  display grid
  width 100%
  height 100%
  grid-template-areas \
    'box1 box2'\
    'box3 box4'
  grid-template-rows 1fr 1fr
  grid-template-columns 1fr 1fr
  grid-gap 0.5rem
  padding 1rem 0
  font-size 0.8rem
  .box
    background rgba(0,0,0,0.5)
    padding 0.5rem 1rem
    display flex
    flex-direction column
    justify-content space-around
    &:nth-child(3)
      span
        color $color-blue
        text-shadow 0 0 0.3rem $color-blue
    &:nth-child(4)
      span
        color $color-red
        text-shadow 0 0 0.3rem $color-red
    b
      color #ccc
    img
      width 3rem
    span
      font-family $font-pang
      font-size 2.2rem
      margin-left 0.2rem
      color $color-green
      text-shadow 0 0 0.3rem $color-green
  .box1
    grid-area box1
  .box2
    grid-area box2
  .box3
    grid-area box3
  .box4
    grid-area box4
</style>
