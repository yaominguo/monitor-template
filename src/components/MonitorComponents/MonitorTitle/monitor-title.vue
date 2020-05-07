<template>
  <div class="monitor-title">
    <span v-if="!hideDate" class="moment date" @mouseenter="openDatePicker = true" @mouseleave="openDatePicker = false">
      <DatePicker @on-change="handleDateChange" :value="curDate" :options="options" class="date-picker" :open="editable && openDatePicker" type="date">
        <span>{{curDate}}</span>
      </DatePicker>
    </span>
    <span v-if="!hideTime" class="moment time">{{time}}</span>
    <img :src="bgImg" draggable="false"/>
    <p :style="style"><slot /></p>
  </div>
</template>

<script>
export default {
  name: 'MonitorTitle',
  props: {
    bgImg: {
      type: String,
    },
    hideDate: {
      type: Boolean,
      default: false,
    },
    hideTime: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
      default: '2.8rem',
    },
  },
  data() {
    return {
      openDatePicker: false,
      timer: null,
      time: null,
      style: {},
    }
  },
  mounted() {
    if (!this.hideTime) {
      this.timer = setInterval(() => {
        this.time = `${this.$moment().format('dddd')} ${this.$moment().format('LTS')}`
      }, 1000)
    }
    if (this.color) {
      this.style = {
        'text-shadow': `0 0.2rem 0.4rem ${this.color}`,
        'color': this.color,
        'background-image': `linear-gradient(to bottom, #fff, ${this.color})`
      }
    }
    this.style = {...this.style, 'font-size': this.size}
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
  computed: {
    curDate() {
      const date = this.$store.state.curDate
      return date ? this.$moment(date).format('LL') : this.$moment().format('LL')
    },
    options() {
      return {
        disabledDate: (date) => {
          return this.$moment(date).isAfter(this.$moment())
        }
      }
    }
  },
  methods: {
    handleDateChange(date) {
      this.$store.commit('SET_CURDATE', date)
      this.openDatePicker = false
    },
  }
}
</script>

<style lang="stylus" scoped>
.monitor-title
  display flex
  align-items center
  justify-content center
  position relative
  background-size cover
  background-position center
  font-family $font-pang
  .moment
    z-index 100
    position absolute
    font-size 1.2rem
    color #fff
    width 15rem
    &.date
      left 20%
      top 50%
      transform translateY(-80%)
      cursor pointer
    &.time
      right 13%
      top 50%
      transform translateY(-80%)
  img
    position absolute
    width 100%
    height 100%
    top 0
    left 0
    animation shine 2.5s linear reverse infinite
  >p
    text-shadow 0 0.2rem 0.4rem #25e7f6
    background-clip text
    -webkit-background-clip text
    color #25e7f6
    -webkit-text-fill-color transparent
    background-image linear-gradient(to bottom, #fff, #25e7f6)
@keyframes shine {
  0% {
    opacity 1
  }
  50% {
    opacity 0.7
  }
  100% {
    opacity 1
  }
}
</style>
