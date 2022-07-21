<template>
  <div class="the-page-container">
    <slot></slot>
    <div class="the-copyright-box" v-if="copyright">©版权归JasonJust所有</div>
  </div>
</template>

<script>
export default {
  name: 'ThePageContainer',
  props: {
    copyright: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";

.the-page-container {
  width: 100%;
  height: 100%;
  @include scroll();

  .the-copyright-box {
    width: 100%;
    padding: $gap-small 0;
    background: $--card-background-color;
    color: gray;
    text-align: center;
    /*display: flex;*/
    /*align-items: center;*/
    /*justify-content: center;*/
  }
}
</style>
