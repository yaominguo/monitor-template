<template>
<div class="card-wrapper">
  <div v-if="!hideTitle" class="card-title" :style="`color:${color}`">
    <img v-if="icon" :src="icon"/>
    {{title}}
  </div>
  <div class="card-content" :style="contentStyle">
    <slot />
  </div>
</div>
</template>

<script>
export default {
  name: 'Mode3',
  props: {
    icon: {},
    title: {
      type: String,
      default: '标题',
    },
    color: {
      type: String,
    },
    hideTitle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    contentStyle() {
      if (!this.hideTitle) return {}
      return {
        'height': '100%',
        'overflow-y': 'hidden',
      }
    }
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
    font-size 1.4rem
    font-weight bold
    background $cardBg
    margin-bottom 0.5rem
    height 3rem
    padding 0 1rem
    >img
      width 1.4rem
      margin-right 1rem
  .card-content
    background $cardBg
    padding 1rem
</style>
