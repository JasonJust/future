<template>
  <div>
    <el-switch
      v-model="type"
      active-text="左侧导航"
      inactive-text="顶部导航">
    </el-switch>
    <br/>
    <el-switch
      v-model="theme"
      active-text="深色主题色"
      inactive-text="浅色主题色">
    </el-switch>
  </div>
</template>

<script>
export default {
  name: 'SystemSettings',
  data () {
    return {
      type: false,
      theme: false
    }
  },
  watch: {
    'type' () {
      this.$bus.$emit('switchType', this.type)
    },
    'theme' () {
      this.$bus.$emit('themeType', this.theme)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
