<template>
  <div class="data-view-box">
    <div class="data-view-top">
      <div class="top-item" v-for="item in topData" :key="item.title">
        <div class="text-overflow top-item-value" :title="item.value">{{item.value}}</div>
        <div class="text-overflow top-item-label">{{item.label}}</div>
      </div>
    </div>
    <div class="data-view-center">
      <h4>统计图</h4>
      <div class="data-view-container">
        <div class="data-view-container-left">
          <el-radio-group v-model="timeType">
            <el-radio label="month">月销量</el-radio>
            <el-radio label="weekly">周销量</el-radio>
            <el-radio label="day">日销量</el-radio>
          </el-radio-group>
          <div class="data-view-container-left-bottom">
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
        <div class="data-view-container-right">
          <line-charts :data-item="barData"
                       :type="timeType"></line-charts>
        </div>
      </div>
    </div>
    <div class="data-view-bottom"></div>
  </div>
</template>

<script>
import { dataView, goods } from '@/assets/js/dataList'
import BarItemCharts from '@/views/echarts/components/BarItemCharts'
import * as _ from 'lodash'
import LineCharts from '@/views/echarts/components/LineCharts'

export default {
  name: 'DataView',
  components: { LineCharts, BarItemCharts },
  data () {
    return {
      topData: dataView.salesVolume,
      timeType: 'month'
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
        obj.value = i.salesVolume[this.timeType]
        return obj
      }), ['value'], ['desc'])
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";

.data-view-box {
  width: 100%;
  height: 100%;

  .text-overflow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .data-view-top {
    width: calc(100% - 64px);
    height: 120px;
    margin: $gap-xl;
    display: flex;
    justify-content: center;

    .top-item {
      height: 100%;
      width: 300px;
      background-color: $--card-background-color;
      margin-right: $gap;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .top-item-label {
        color: $--lebel-color;
        height: 40px;
        width: 95%;
        line-height: 40px;
        text-align: center;
      }

      .top-item-value {
        color: $--value-color;
        height: calc(100% - 48px - 16px);
        max-width: 95%;
        font-weight: bold;
        font-size: 48px;
        margin-top: $gap;
      }
    }

    .top-item:last-child {
      margin-right: 0;
    }
  }

  .data-view-center {
    /*height: calc(100% - 120px - 120px - 64px);*/
    text-align: center;

    h4 {
      color: $--lebel-color;
      margin-bottom: $gap;
    }

    .data-view-container {
      width: 80%;
      background: $--card-background-color;
      height: 350px;
      margin: 0 auto;
      display: flex;

      .data-view-container-left {
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

        .data-view-container-left-bottom {
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

      .data-view-container-right {
        width: 100%;
        height: 100%;
      }
    }
  }

  .data-view-bottom {
    /*height: 120px;*/
  }
}
</style>
