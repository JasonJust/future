<template>
  <div class="drink-item-box">{{dataItem.name}}</div>
</template>

<script>
export default {
  name: 'OneDrink',
  props: {
    dataItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";

.drink-item-box {
  padding: $gap;
  width: 13%;
  /*height: 250px;*/
  box-shadow: $--shadow-color-primary;
}
</style>
