<template>
  <div class="data-view-box">
    <div class="data-view-top">
      <div class="top-item" v-for="item in topData" :key="item.title">
        <div class="text-overflow top-item-value" :title="item.value">{{item.value}}</div>
        <div class="text-overflow top-item-label">{{item.label}}</div>
      </div>
    </div>
    <div class="data-view-center"></div>
    <div class="data-view-bottom"></div>
  </div>
</template>

<script>
import { dataView } from '@/assets/js/dataList'

export default {
  name: 'DataView',
  data () {
    return {
      topData: dataView.salesVolume
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
      background-color: $--vice-background-color;
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
    height: calc(100% - 120px - 120px - 64px);
  }

  .data-view-bottom {
    height: 120px;
  }
}
</style>
