<template>
  <div class="title-box">
    <div class="title-bar"></div>
    <span class="title-word" :title="title">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'TheTitleItem',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/style/common";
.title-box {
  width: 100%;
  height: $gap-xl;
  line-height: $gap-xl;
  display: flex;
  align-items: center;

  .title-bar {
    height: 80%;
    width: 4px;
    background: $--bar-primary;
    margin-right: $gap-small;
  }

  .title-word {
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
