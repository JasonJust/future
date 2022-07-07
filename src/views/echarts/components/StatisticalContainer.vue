<template>
  <div class="statistical-box">
    <div class="statistical-box-left">
        <el-radio-group v-model="timeType">
          <el-radio label="month">月销量</el-radio>
          <el-radio label="weekly">周销量</el-radio>
          <el-radio label="day">近三天销量</el-radio>
        </el-radio-group>
        <div class="statistical-box-left-bottom">
          <div class="bar-item-box"
               v-for="(item, index) in barData"
               :key="item.id">
            <i class="icon iconfont icon-jiangpai" v-if="index === 0"></i>
            <bar-item-charts :data-item="item"
                             :max-bg-value="maxBackgroundValue"
                             :type="timeType"></bar-item-charts>
          </div>
        </div>
  </div>
    <div class="statistical-box-right" v-if="lineData.times">
      <line-charts :data-item="lineData"
                   :type="timeType"></line-charts>
    </div>
  </div>
</template>

<script>
import BarItemCharts from '@/views/echarts/components/echarts/BarItemCharts'
import LineCharts from '@/views/echarts/components/echarts/LineCharts'
import { goods } from '@/assets/js/dataList'
import * as _ from 'lodash'

export default {
  name: 'StatisticalContainer',
  components: { LineCharts, BarItemCharts },
  data () {
    return {
      timeType: 'month',
      times: []
    }
  },
  computed: {
    maxBackgroundValue () {
      let result = 0
      goods.drinkData.map((i) => {
        if (i.salesVolume[this.timeType] > result) {
          result = i.salesVolume[this.timeType]
        }
        return i
      })
      return result
    },
    barData () {
      return _.orderBy(goods.drinkData.map((i) => {
        const obj = i
        obj.value = _.cloneDeep(i.salesVolume[this.timeType])
        console.log(obj, i.salesVolume[this.timeType], this.timeType)
        return obj
      }), ['value'], ['desc'])
    },
    lineData () {
      this.getLineTimes()
      const result = {
        times: this.times,
        colors: ['red', 'orange', '#0b73d7'],
        dataList: this.barData
      }
      console.log(result)
      return result
    }
  },
  methods: {
    getLineTimes () {
      this.times = []
      if (this.timeType === 'month') {
        this.getalldays(this.getLineMonths(1).split(',')[0], this.getLineMonths(1).split(',')[1])
      } else if (this.timeType === 'weekly') {
        for (let i = 7; i > 0; --i) {
          this.times.push(this.getLineDays(-i))
        }
      } else {
        for (let i = 3; i > 0; --i) {
          this.times.push(this.getLineDays(-i))
        }
      }
    },
    getLineDays (n) {
      const dd = new Date()
      dd.setDate(dd.getDate() + n) // 获取n天后的日期
      const y = dd.getFullYear()
      const m = dd.getMonth() + 1 // 获取当前月份的日期
      const d = dd.getDate()
      const day = y + '-' + (m > 10 ? m : '0' + m) + '-' + (d > 10 ? d : '0' + d)
      return day
    },
    getLineMonths (n) {
      let result = ''
      const datenow = new Date()
      const dateend = datenow.getFullYear().toString() + '-' + (datenow.getMonth() + 1).toString() + '-' + datenow.getDate().toString()
      datenow.setMonth(datenow.getMonth() - n)
      const dyear = datenow.getFullYear()
      let dmonth = datenow.getMonth() + 1
      dmonth = dmonth < 10 ? 0 + dmonth : dmonth
      const dday = datenow.getDate()
      const datestart = dyear.toString() + '-' + (dmonth > 10 ? dmonth.toString() : '0' + dmonth.toString()) + '-' + (dday > 10 ? dday.toString() : '0' + dday.toString())
      result += datestart + ','
      result += dateend
      return result
    },
    getalldays (start, end) { // 获取指定时间中的时间段
      const startTime = new Date(start).getTime()
      const endTime = new Date(end).getTime()
      for (let k = startTime; k <= endTime;) {
        k = k + 24 * 60 * 60 * 1000
        this.times.push(this.changeData(k))
      }
    },
    changeData (time) {
      const result = new Date(time).toLocaleDateString().replace(/\//g, '-')
      const end = result.split('-')
      if (end[1] < 10) {
        end[1] = '0' + end[1]
      }
      if (end[2] < 10) {
        end[2] = '0' + end[2]
      }
      return end.join('-')
    }
  },
  watch: {
    'timeType' () {
      this.getLineTimes()
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";

.statistical-box {
  height: 100%;
  width: 100%;
  display: flex;

  .statistical-box-left {
    width: 50%;
    height: 100%;

    /deep/ .el-radio-group {
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      .el-radio {
        margin: 0;
        padding: $gap-small $gap;
        border-radius: $--border-radius-primary;

        .el-radio__input {
          display: none;
        }

        .el-radio__label {
          padding: 0;
        }

        &.is-checked {
          background: $--card-background-color-choose;

          .el-radio__label {
            color: $--value-color;
          }
        }
      }
    }

    .statistical-box-left-bottom {
      width: 100%;
      height: calc(100% - 100px - 16px);
      @include scroll();

      .bar-item-box {
        width: 100%;
        display: flex;
        position: relative;

        i {
          position: absolute;
          left: 80px;
          top: 2px;
          font-size: 24px;
          color: $--value-color;
        }
      }
    }
  }

  .statistical-box-right {
    width: 100%;
    height: 100%;
  }
}
</style>
