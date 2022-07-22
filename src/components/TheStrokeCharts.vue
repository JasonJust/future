<template>
  <div class="canvas" ref="canvas"></div>
</template>

<script>
export default {
  name: 'TheStrokeCharts',
  data () {
    return {
      chartIns: '',
      options: {
        graphic: {
          elements:  [
            {
              type: 'text',
              left: 'center',
              top: 'center',
              style: {
                text: 'Jason Just',
                fontSize: 80,
                fontWeight: 'bold',
                lineDash: [0, 200],
                lineDashOffset: 0,
                fill: 'transparent',
                stroke: '#000',
                lineWidth: 1
              },
              keyframeAnimation: {
                duration: 3000,
                loop: true,
                keyframes: [
                  {
                    percent: 0.7,
                    style: {
                      fill: 'transparent',
                      lineDashOffset: 200,
                      lineDash: [200, 0]
                    }
                  },
                  {
                    // Stop for a while.
                    percent: 0.8,
                    style: {
                      fill: 'transparent'
                    }
                  },
                  {
                    percent: 1,
                    style: {
                      fill: 'black'
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  mounted () {
    this.init()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    init () {
      if (!this.chartIns) {
        this.chartIns = this.$echarts.init(this.$refs.canvas)
        this.chartIns.setOption(this.options)
      }
    },
    onResize () {
      if (this.chartIns) {
        this.chartIns.resize()
      }
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

<style scoped>

</style>
