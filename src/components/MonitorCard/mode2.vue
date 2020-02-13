<template>
<div class="card-wrapper">
  <div class="edge left-bottom"/>
  <div class="edge right-bottom"/>
  <div class="card-title" :style="`color:${color}`">
    {{title}}
  </div>
  <div class="card-content">
    <slot />
  </div>
</div>
</template>

<script>
export default {
  name: 'Mode2',
  props: {
    title: {
      type: String,
      default: '标题',
    },
    color: {
      type: String,
    }
  },
}
</script>

<style lang="stylus" scoped>
.card-wrapper
  padding 0 !important
  >.edge
    position absolute
    width 1rem
    height 1rem
    border 0.12rem solid $color-blue
    border-top-color transparent
    bottom 0
    &.left-bottom
      border-right-color transparent
      left 0
    &.right-bottom
      border-left-color transparent
      right 0
  .card-title
    display flex
    align-items center
    color #fff
    font-size 1.4rem
    font-family $font-pang
    padding 0 1rem
  .card-content
    padding 0.5rem 1rem
    background rgba(19, 78, 115, 0.3)
    border-top 0.12rem solid $color-blue
    position relative
</style>
