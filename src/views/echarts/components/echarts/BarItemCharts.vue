<template>
  <div class="canvas" ref="canvas"></div>
</template>

<script>
export default {
  name: 'BarItemCharts',
  props: {
    dataItem: {
      type: Object,
      default: () => {}
    },
    maxBgValue: {
      type: Number,
      default: 100
    },
    type: {
      type: String,
      default: 'month'
    }
  },
  data () {
    return {
      chartIns: '',
      options: {}
    }
  },
  mounted () {
    this.init()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    init () {
      this.options = {
        grid: {
          left: 170,
          right: 60
        },
        tooltip: {
          show: false
        },
        xAxis: {
          show: false,
          type: 'value'
        },
        yAxis: [{
          type: 'category',
          inverse: true,
          axisLabel: {
            show: true,
            // margin: -2,
            textStyle: {
              align: 'right',
              color: '#606266'
            }
          },
          nameGap: 24,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: [this.dataItem.name]
        }, {
          type: 'category',
          inverse: true,
          axisTick: 'none',
          axisLine: 'none',
          show: false,
          axisLabel: {
            textStyle: {
              color: '#606266',
              fontSize: '12'
            }
          },
          data: [this.maxBgValue]
        }],
        series: [
          {
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
              normal: {
                barBorderRadius: [6, 6, 6, 6],
                color: '#ddd',
                label: {
                  show: true,
                  textStyle: {
                    color: 'gray'
                  },
                  formatter: (params) => {
                    return params.value ? ('+' + params.value) : '0'
                  }
                }
              },
              emphasis: {
                color: '#ddd'
              }
            },
            barWidth: 14,
            data: [this.dataItem.sales]
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: 14,
            barGap: '-100%',
            data: [this.maxBgValue],
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                barBorderRadius: [6, 6, 6, 6],
                color: '#F0F0F0'
              },
              emphasis: {
                barBorderRadius: [6, 6, 6, 6],
                color: '#F0F0F0'
              }
            }
          }
        ]
      }
      if (!this.chartIns) {
        this.chartIns = this.$echarts.init(this.$refs.canvas)
      }
      this.chartIns.setOption(this.options)
    },
    onResize () {
      if (this.chartIns) {
        this.chartIns.resize()
      }
    }
  },
  watch: {
    'type' () {
      this.chartIns.clear()
      this.init()
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
    if (this.chartIns) {
      this.chartIns.dispose()
    }
  }
}
</script>

<style scoped lang="scss">
.canvas {
  height: 40px;
  width: 100%;
}
</style>
