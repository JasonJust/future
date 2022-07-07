<template>
  <el-drawer
    :title="dataItem.name"
    :visible.sync="drawer"
    :with-header="false"
    @close="close">
    <div class="drink-image">
<!--      <img src="" v-if="dataItem.image">-->
<!--      <i class="icon iconfont icon-tupian1" v-else></i>-->
      <i class="icon iconfont icon-tupian1"></i>
    </div>
    <h4>{{dataItem.name}}</h4>
    <div class="drink-content">
      <div v-for="item in dataItem.details" :key="item.label">
        <the-title-item :title="item.label"></the-title-item>
        <span>{{item.value.join('、')}}</span>
      </div>
    </div>
  </el-drawer>
</template>

<script>
import TheTitleItem from '@/components/TheTitleItem'

export default {
  name: 'OneDrinkDetails',
  components: { TheTitleItem },
  data () {
    return {
      drawer: false,
      dataItem: {}
    }
  },
  methods: {
    open (data) {
      this.drawer = true
      this.dataItem = data
    },
    close () {
      this.drawer = false
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";

.el-drawer {
  .el-drawer__body {
    @include scroll();

    h4 {
      text-align: center;
    }

    .drink-image {
      height: 200px;
      line-height: 200px;
      width: 200px;
      margin: $gap auto;
      box-shadow: $--shadow-color-primary;
      text-align: center;
      border-radius: $--border-radius-primary;

      i {
        font-size: 48px;
      }
    }

    .drink-content {
      padding: $gap;
      width: 300px;
      height: 300px;
      background: $--card-background-color;
    }
  }
}
</style>
