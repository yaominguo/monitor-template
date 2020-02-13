<template>
<div class="card-wrapper">
  <div class="card-title" :style="`color:${color}`">
    {{title}}
    <div class="dot"/>
    <div class="line"/>
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
  background $cardBg
  border-right 0.2rem solid $edgeColor
  .card-title
    display flex
    align-items center
    color $cardFontColor
    font-size 1.4rem
    font-family $font-pang
    .dot
      width 0.4rem
      height 1rem
      background $edgeColor
      margin 0 0.5rem
    .line
      height 1px
      flex 1
      background $edgeColor
      opacity 0.3
</style>
