<template>
  <div class="x-calendar">
    <div class="x-calendar__header">
      <div class="x-calendar__title">{{ dateText }}</div>
      <div class="x-calendar__button-group">
        <div class="x-button-group">
          <x-button-group>
            <x-button @click="handlePrevMonth" icon="left">上个月 </x-button
            ><x-button @click="handleToday"> 今天 </x-button
            ><x-button
              @click="handleNextMonth"
              icon="right"
              iconPosition="right"
            >
              下个月
            </x-button>
          </x-button-group>
        </div>
      </div>
    </div>
    <table class="x-calendar-table" cxlspacing="0" cxlpadding="0">
      <thead>
        <th>一</th>
        <th>二</th>
        <th>三</th>
        <th>四</th>
        <th>五</th>
        <th>六</th>
        <th>日</th>
      </thead>
      <tbody>
        <tr
          class="x-calendar-table__row"
          v-for="(chunkDays, index) in visiableDays"
          :key="index"
        >
          <td v-for="day in chunkDays" :key="day.date.getTime()">
            <div class="x-calendar-day 111">
              <p
                :class="{
                  prev: day.prev,
                  current: day.current,
                  next: day.next,
                  selected: day.curDay
                }"
              >
                {{ day.date.getDate() }}
              </p>
            </div>
          </td>
          <!-- <td class="current is-today">
          <div class="x-calendar-day"><p class="">08-01</p></div>
        </td> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getVisibleDays } from './model.js'
import XButtonGroup from '../button/button-group.vue'
import XButton from '../button/button.vue'
export default {
  name: 'Calendar',
  components: { XButtonGroup, XButton },
  data() {
    return {
      visiableDays: [],
      nowdate: new Date()
    }
  },
  computed: {
    dateText() {
      const year = this.nowdate.getFullYear()
      const month = this.nowdate.getMonth() + 1
      return `${year} 年 ${month} 月`
    }
  },
  created() {
    this.visiableDays = getVisibleDays()
  },
  methods: {
    handlePrevMonth() {
      const nowdate = new Date(this.nowdate)
      nowdate.setMonth(nowdate.getMonth() - 1)
      this.nowdate = nowdate
      this.visiableDays = getVisibleDays(nowdate)
    },
    handleNextMonth() {
      const nowdate = new Date(this.nowdate)
      nowdate.setMonth(nowdate.getMonth() + 1)
      this.nowdate = nowdate
      this.visiableDays = getVisibleDays(nowdate)
    },
    handleToday() {
      const nowdate = new Date()
      this.nowdate = nowdate
      this.visiableDays = getVisibleDays(nowdate)
    }
  }
}
</script>

<style lang="less">
.x-calendar__header {
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom: 1px solid #ebeef5;
}
table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 0px;
}
.x-calendar-table {
  width: 100%;
  border-top: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
  th {
    border-bottom: 1px solid #ebeef5;
    border-right: 1px solid #ebeef5;
    height: 2em;
  }
  td {
    border-bottom: 1px solid #ebeef5;
    border-right: 1px solid #ebeef5;
    text-align: center;
    height: 4em;
    &:hover {
      cursor: pointer;
      background-color: #f2f8fe;
    }
    > .x-calendar-day {
      p.prev,
      p.next {
        color: #c0c4cc;
      }
      p.selected {
        color: #1989fa;
      }
    }
  }
}
</style>
