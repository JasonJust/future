<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  body {
    min-width: 1200px;
    /*min-height: 600px;*/
    @include scroll();
  }
  html, body, #app {
    width: 100%;
    height: 100%;
  }
</style>
