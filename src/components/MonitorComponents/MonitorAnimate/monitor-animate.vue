<template>
<transition
  name="custom-classes-transition"
  :enter-active-class="`animated ${enter}`"
  :leave-active-class="`animated ${leave}`">
  <slot />
</transition>
</template>

<script>
export default {
  name: 'MonitorAnimate',
  props: {
    enter: {
      type: String,
      required: true,
    },
    leave: {
      type: String,
      required: true,
    },
  }
}
</script>
