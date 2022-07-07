<template>
  <div class="data-view-box">
    <div class="data-view-top">
      <div class="top-item" v-for="item in topData" :key="item.title">
        <div class="text-overflow top-item-value" :title="item.value">{{item.value}}</div>
        <div class="text-overflow top-item-label">{{item.label}}</div>
      </div>
    </div>
    <div class="data-view-center">
      <div class="data-view-item-box">
        <h4>统计图</h4>
        <div class="data-view-container">
          <statistical-container></statistical-container>
        </div>
      </div>
      <div class="data-view-item-box">
        <h4>总计图</h4>
        <div class="data-view-container">
          <amount-container></amount-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataView } from '@/assets/js/dataList'
import StatisticalContainer from '@/views/echarts/components/StatisticalContainer'
import AmountContainer from '@/views/echarts/components/AmountContainer'

export default {
  name: 'DataView',
  components: { AmountContainer, StatisticalContainer },
  data () {
    return {
      topData: dataView.salesVolume
    }
  },
  computed: {
  },
  mounted () {
    // this.getTableData()
  },
  methods: {
    getTableData () {
      const data = {
        page: 1,
        size: 10
      }
      this.$axios.post('/node/page', data).then((res) => {
        console.log(res)
      })
    }
  }
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
    padding-bottom: $gap;

    .data-view-item-box {
      margin-top: $gap;

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
      }
    }
  }
}
</style>
