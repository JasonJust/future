<template>
  <div class="setting-box">
    <the-title-item title="导航类型设置"></the-title-item>
    <el-switch
      v-model="type"
      active-text="左侧导航"
      inactive-text="顶部导航">
    </el-switch>
    <br/>
    <the-title-item title="主题色设置"></the-title-item>
    <el-switch
      v-model="theme"
      active-text="深色主题色"
      inactive-text="浅色主题色">
    </el-switch>
    <br/>
    <div v-if="type">
      <the-title-item title="菜单折叠展开"></the-title-item>
      <el-switch
        v-model="elastic"
        active-text="展开"
        inactive-text="收缩">
      </el-switch>
    </div>
  </div>
</template>

<script>
import TheTitleItem from '@/components/TheTitleItem'
export default {
  name: 'SystemSettings',
  components: {
    TheTitleItem
  },
  data () {
    return {
      type: false,
      theme: false,
      elastic: true
    }
  },
  watch: {
    'type' () {
      this.$bus.$emit('switchType', { label: 'type', value: this.type })
    },
    'theme' () {
      this.$bus.$emit('themeType', { label: 'theme', value: this.theme })
    },
    'elastic' () {
      this.$bus.$emit('elasticType', { label: 'elastic', value: this.elastic })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/style/common";
.setting-box {
  height: calc(100% - 32px);
  width: calc(100% - 32px);
  padding: $gap;

  .el-switch {
    margin-bottom: $gap;
  }
}
</style>
