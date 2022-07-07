<template>
  <div class="drink-box">
    <div class="drink-types-top" v-if="$store.state.menuType === 'top'">
      <el-radio-group v-model="drinkType">
        <el-radio label="全部" value="全部"></el-radio>
        <el-radio v-for="(item, index) in typeList"
                  :key="index"
                  :label="item"
                  :value="item"></el-radio>
      </el-radio-group>
    </div>
    <div class="drink-types-left" v-else>
      <el-radio-group v-model="drinkType">
        <el-radio v-for="(item, index) in typeList"
                  :key="index"
                  :label="item"
                  :value="item"></el-radio>
      </el-radio-group>
    </div>
    <div class="drink-data-list" :class="[$store.state.menuType === 'top' ? 'drink-types-bottom' : 'drink-types-right']">
      <one-drink v-for="item in drinkData"
                 :key="item.id"
                 :data-item="item"
                 @drinkDetails="drinkDetails(item)"></one-drink>
      <one-drink-details ref="drinkDetailsDrawer"></one-drink-details>
    </div>
  </div>
</template>

<script>
import { goods } from '@/assets/js/dataList'
import OneDrink from '@/views/drinks/components/OneDrink'
import OneDrinkDetails from '@/views/drinks/components/OneDrinkDetails'

export default {
  name: 'DrinkList',
  components: {
    OneDrinkDetails,
    OneDrink
  },
  data () {
    return {
      typeList: goods.drinkTypes,
      drinkType: '全部'
    }
  },
  computed: {
    drinkData () {
      if (this.drinkType === '全部') {
        return goods.drinkData
      } else {
        return goods.drinkData.filter((i) => {
          return i.type.includes(this.drinkType)
        })
      }
    }
  },
  methods: {
    drinkDetails (item) {
      this.$refs.drinkDetailsDrawer.open(item)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";

  .drink-box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .drink-types-top {
      height: 48px;
      line-height: 48px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: $gap;

      /deep/ .el-radio-group {
        border-radius: 24px;
        background: $--card-background-color;

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
            color: $--color-primary;
          }

          &.is-checked {
            background-color: $--card-background-color-choose;
            border-radius: 24px;

            .el-radio__label {
              font-weight: bold;
              color: $--value-color;
            }
          }
        }
      }
    }

    .drink-types-left {
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
      display: inline-block;
      flex-wrap: wrap;
      @include scroll();

      .drink-item-box {
        margin: $gap 0 $gap $gap;
        display: inline-block;
      }
    }

    .drink-types-bottom {
      height: calc(100% - 48px - 16px);
      width: 100%;
    }

    .drink-types-right {
      width: calc(100% - 200px);
      height: 100%;
    }
  }
</style>
