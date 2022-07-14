<template>
  <div class="canvas" ref="canvas"></div>
</template>

<script>
export default {
  name: 'LineCharts',
  props: {
    dataItem: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: 'month'
    }
  },
  data () {
    return {
      chartIns: '',
      options: {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '8%',
          bottom: '3%',
          // top: '30%',
          containLabel: true
        },
        legend: {
          show: true,
          icon: 'category',
          orient: 'vertical',
          right: '0',
          itemWidth: 40,
          itemHeight: 8,
          textStyle: {
            color: '#226597',
            fontSize: '12', // 文字字体大小
            align: 'left', // 文字水平对齐方式
            verticalAlign: 'left', // 文字垂直对齐方式
            lineHeight: '12' // 行高 ）
            // backgroundColor: 'red' // 文字块背景色，例：'#123234', 'red', 'rgba(0,23,11,0.3)'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
          axisTick: { // 刻度
            show: false
          },
          axisLine: {
            lineStyle: {
              type: 'dashed',
              color: 'gray'
            }
          },
          axisLabel: {
            // showMinLabel: true,
            // showMaxLabel: true,
            // interval: Math.ceil(this.times.length / 2) - 1

            // formatter: (params, i) => {
            //   if (i === 0 || i === this.dataList.times.length - 1 || i === Math.ceil(this.dataList.times.length / 2)) {
            //     return params
            //   }
            // }
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: 'gray'
            }
          }
        },
        series: []
      }
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
      this.options.series = []
      this.options.xAxis.data = []
      for (let i = 0; i < this.dataItem.dataList.slice(0, 3).length; i++) {
        const obj = {
          name: this.dataItem.dataList.slice(0, 3)[i].name,
          type: 'line',
          showSymbol: false,
          smooth: true, // 光滑曲线
          data: [],
          itemStyle: {
            normal: {
              color: this.dataItem.colors[i]
            }
          }
        }

        for (let j = 0; j < this.dataItem.times.length; j++) {
          obj.data.push(obj.data.length > 0 ? (obj.data[obj.data.length - 1] + (this.dataItem.dataList.slice(0, 3)[i].sales / this.dataItem.times.length)) + 0.1 : 0)
        }
        obj.data = obj.data.map((i) => {
          return i.toFixed(0)
        })
        this.options.series.push(obj)
      }
      this.options.xAxis.data = this.dataItem.times

      if (!this.chartIns) {
        this.chartIns = this.$echarts.init(this.$refs.canvas)
      }
      this.chartIns.setOption(this.options)
    }
  },
  beforeDestroy () {
    window.addEventListener('resize', () => {
      if (this.chartIns) {
        this.chartIns.resize()
      }
    })
    if (this.chartIns) {
      this.chartIns.dispose()
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
