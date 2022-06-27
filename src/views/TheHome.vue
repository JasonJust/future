<template>
  <div class="the-home">
    <div class="the-home-menu">
    </div>
    <div class="the-home-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHome'
}
</script>

<style scoped lang="scss">
  @import "../assets/style/common";
.the-home {
  height: 100%;
  width: 100%;

  .the-home-menu {
    height: $--top-menu-height;
    width: 100%;
    box-shadow: 5px 5px 15px $--shadow-color-primary;
  }

  .the-home-content {
    width: 100%;
    height: calc(100% - 48px);
  }
}
</style>
