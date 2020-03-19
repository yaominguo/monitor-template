<template>
<div class="card-wrapper">
  <div class="card-title" :style="`color:${color};background-image:url(${require('@/assets/images/mode4-bg.png')})`">
    <img v-if="icon" :src="icon"/>
    {{title}}
  </div>
  <div class="card-content">
    <slot />
  </div>
</div>
</template>

<script>
export default {
  name: 'Mode4',
  props: {
    icon: {},
    title: {
      type: String,
      default: '标题',
    },
    color: {
      type: String,
    },
  },
}
</script>

<style lang="stylus" scoped>
.card-wrapper
  padding 0 !important
  .card-title
    display flex
    align-items center
    color #fff
    font-size 1.2rem
    font-weight bold
    height 3rem
    padding 0 0.5rem
    background-size 90% 70%
    background-position left center
    background-repeat no-repeat
    background-color #063a6f
    >img
      width 1.4rem
      margin-right 0.5rem
  .card-content
    background #052749
    padding 1rem
</style>
