<template>
  <div class="canvas" ref="canvas"></div>
</template>

<script>
export default {
  name: 'LineCharts',
  props: {
    dataItem: {
      type: Array,
      default: () => {}
    },
    type: {
      type: String,
      default: 'month'
    }
  },
  data () {
    return {
      weekly: [],
      month: [],
      chartIns: '',
      options: {}
    }
  },
  mounted () {
    this.init()
    window.addEventListener('resize', () => {
      if (this.chartIns) {
        this.chartIns.resize()
      }
    })
  },
  methods: {
    init () {
      for (let i = 7; i > 0;) {
        console.log(i--)
        this.weekly.push(this.getLineDays(-(i + 1)))
      }
      this.getalldays(this.getLineMonths(1).split(',')[0], this.getLineMonths(1).split(',')[1])
      this.options = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          nameLocation: 'middle',
          data: this.type === '月销量' ? this.month : this.weekly
        },
        yAxis: {
          name: 'Income'
        },
        series: [
          {
            type: 'line',
            datasetId: 'dataset_since_1950_of_germany',
            showSymbol: false,
            encode: {
              x: 'Year',
              y: 'Income',
              itemName: 'Year',
              tooltip: ['Income']
            },
            data: []
          }
        ]
      }
      console.log(this.options.xAxis.data.length)
      this.options.series[0].data = this.options.xAxis.data.map((i) => { return 1 })
      console.log(this.options)

      if (!this.chartIns) {
        this.chartIns = this.$echarts.init(this.$refs.canvas)
      }
      this.chartIns.setOption(this.options)
    },
    getLineDays (n) {
      var dd = new Date()
      dd.setDate(dd.getDate() + n) // 获取n天后的日期
      var y = dd.getFullYear()
      var m = dd.getMonth() + 1 // 获取当前月份的日期
      var d = dd.getDate()
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
        this.month.push(this.changeData(k))
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
    'type' () {
      this.init()
    }
  }
}
</script>

<style scoped lang="scss">
.canvas {
  width: 100%;
  height: 100%;
}
</style>
