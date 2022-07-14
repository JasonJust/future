<template>
  <div class="amount-box">
    <div class="pie-item-box">
      <div class="pie-item">
        <nightingale-rose :data-item="roseData" title="月销售额" v-if="roseData"></nightingale-rose>
      </div>
    </div>
    <div class="pie-item-box">
      <pie-custom-charts :data-item="salesVolume" title="销售额"></pie-custom-charts>
    </div>
    <div class="pie-item-box">
      <div class="pie-item">
        <pie-charts :data-item="salesVolume" title="销售额"></pie-charts>
      </div>
    </div>
  </div>
</template>

<script>
import * as _ from 'lodash'
import NightingaleRose from '@/views/echarts/components/echarts/pie-charts/NightingaleRoseCharts'
import PieCustomCharts from '@/views/echarts/components/echarts/pie-charts/PieCustomCharts'
import PieCharts from '@/views/echarts/components/echarts/pie-charts/PieCharts'
import { goods, dataView } from '@/assets/js/dataList'

export default {
  name: 'AmountContainer',
  components: {
    PieCustomCharts,
    NightingaleRose,
    PieCharts
  },
  computed: {
    roseData () {
      const result = _.orderBy(goods.drinkData.map((i) => {
        const obj = i
        obj.value = i.salesVolume[this.timeType]
        return obj
      }), ['value'], ['desc'])
      return {
        name: '月销量额度',
        data: result.map((i) => {
          return {
            name: i.name,
            value: i.salesVolume.month * i.price
          }
        })
      }
    },
    salesVolume () {
      console.log(goods, dataView)
      return dataView.salesVolume
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";
.amount-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .pie-item-box {
    width: 33%;
    height: calc(100% - 32px - 32px);
    font-size: 16px;
    font-weight: bold;
    box-shadow: 5px 5px 15px gray;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex-wrap: wrap;
    margin: $gap;
    padding: $gap;
  }

  .pie-item {
    width: 100%;
    height: 100%;
    box-shadow: 5px 5px 15px gray;
  }
}
</style>
