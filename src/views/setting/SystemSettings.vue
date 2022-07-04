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
<!--    <el-switch-->
<!--      v-model="theme"-->
<!--      active-text="深色主题色"-->
<!--      inactive-text="浅色主题色">-->
<!--    </el-switch>-->
    <el-radio-group v-model="theme">
      <el-radio label="default">浅色/默认</el-radio>
      <el-radio label="deep">深色</el-radio>
      <el-radio label="customized">定制色</el-radio>
    </el-radio-group>
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
      type: this.$store.state.menuType === 'left',
      theme: this.$store.state.themeType || 'default',
      elastic: this.$store.state.elasticType
    }
  },
  watch: {
    'type' () {
      this.$store.commit('setMenuType', this.type ? 'left' : 'top')
    },
    'theme' () {
      this.$store.commit('setThemeType', this.theme)
    },
    'elastic' () {
      this.$store.commit('setElasticType', this.elastic)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";
.setting-box {
  height: calc(100% - 32px);
  width: calc(100% - 32px);
  padding: $gap;

  .el-switch {
    margin-bottom: $gap;
  }
}
</style>
