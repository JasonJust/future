<template>
  <div class="canvas" ref="canvas"></div>
</template>

<script>
export default {
  name: 'PieCharts',
  props: {
    dataItem: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      chartIns: '',
      options: {}
    }
  },
  methods: {
    init () {
      const dataList = this.dataItem.map((i) => {
        return {
          name: i.label,
          value: Number(i.value)
        }
      })
      this.options = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'right',
          orient: 'vertical'
        },
        series: [
          {
            name: this.title,
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: dataList
          }
        ]
      }
      if (!this.chartIns) {
        this.chartIns = this.$echarts.init(this.$refs.canvas)
      }
      this.chartIns.setOption(this.options)
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
  beforeDestroy () {
    window.addEventListener('resize', () => {
      if (this.chartIns) {
        this.chartIns.resize()
      }
    })
    if (this.chartIns) {
      this.chartIns.dispose()
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
