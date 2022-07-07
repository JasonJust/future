<template>
  <div class="canvas" ref="canvas"></div>
</template>

<script>
export default {
  name: 'NightingaleRose',
  props: {
    dataItem: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      chartIns: '',
      options: {
        // legend: {
        //   top: 'bottom'
        // },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
          show: true,
          feature: {
            // mark: { show: true },
            // dataView: { show: true, readOnly: false },
            // restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: [50, 140],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: []
          }
        ]
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
      if (this.dataItem) {
        this.options.series[0].name = this.dataItem.name
        this.options.series[0].data = this.dataItem.data
      }
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
  }
}
</script>

<style scoped lang="scss">
.canvas {
  height: 100%;
  width: 100%;
}
</style>
