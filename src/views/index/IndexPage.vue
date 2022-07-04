<template>
  <div class="index-box">
    <div class="index-types-top" v-if="$store.state.menuType === 'top'">
      <el-radio-group v-model="drinkType">
        <el-radio v-for="(item, index) in typeList"
                  :key="index"
                  :label="item"
                  :value="item"></el-radio>
      </el-radio-group>
    </div>
    <div class="index-types-left" v-else>
      <el-radio-group v-model="drinkType">
        <el-radio v-for="(item, index) in typeList"
                  :key="index"
                  :label="item"
                  :value="item"></el-radio>
      </el-radio-group>
    </div>
    <div class="drink-data-list" :class="[$store.state.menuType === 'top' ? 'index-types-bottom' : 'index-types-right']">
      <one-drink v-for="item in drinkData" :key="item.id" :data-item="item"></one-drink>
    </div>
  </div>
</template>

<script>
import { goods } from '@/assets/js/dataList'
import OneDrink from '@/views/index/components/OneDrink'

export default {
  name: 'IndexPage',
  components: {
    OneDrink
  },
  data () {
    return {
      typeList: goods.drinkTypes,
      drinkType: goods.drinkTypes[0],
      drinkData: goods.drinkData
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";

  .index-box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .index-types-top {
      height: 48px;
      line-height: 48px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      /deep/ .el-radio-group {
        .el-radio {
          padding: $gap-small $gap;
          width: 80px;
          margin: 0;
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          .el-radio__input {
            display: none;
          }

          .el-radio__label {
            padding: 0;
          }

          &.is-checked {
            background-color: orange;

            .el-radio__label {
              color: $--value-color;
            }
          }
        }
      }
    }

    .index-types-left {
      width: 200px;
      height: 100%;
      background: orange;

      /deep/ .el-radio {
        width: 100%;
        height: 48px;
        line-height: 48px;
        text-align: center;
        margin: 0;

        .el-radio__input {
          display: none;
        }

        .el-radio__label {
          padding: 0;
        }

        &.is-checked {
          background: white;
        }
      }
    }

    .drink-data-list {
      overflow-y: auto;
      display: inline-block;
      flex-wrap: wrap;

      .drink-item-box {
        margin: $gap 0 $gap $gap;
        display: inline-block;
      }
    }

    .index-types-bottom {
      height: calc(100% - 48px);
      width: 100%;
    }

    .index-types-right {
      width: calc(100% - 200px);
      height: 100%;
    }
  }
</style>
