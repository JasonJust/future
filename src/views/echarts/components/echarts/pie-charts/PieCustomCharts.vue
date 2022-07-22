<template>
  <div class="canvas" ref="canvas"></div>
</template>

<script>
export default {
  name: 'PieCustomCharts',
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
      console.log(dataList)
      this.options = {
        // backgroundColor: '#2c343c',
        backgroundColor: 'gray',
        title: {
          text: this.title,
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 335, name: 'Direct' },
              { value: 310, name: 'Email' },
              { value: 274, name: 'Union Ads' },
              { value: 235, name: 'Video Ads' },
              { value: 400, name: 'Search Engine' }
            ].sort(function (a, b) {
              console.log(a.value, b.value, a.value - b.value)
              return a.value - b.value
            }),
            roseType: 'radius',
            label: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200
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
  mounted () {
    this.init()
    window.addEventListener('resize', this.onResize)
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
  width: 100%;
  height: 100%;
}
</style>
