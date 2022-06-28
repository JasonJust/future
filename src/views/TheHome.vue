<template>
  <div class="the-home">
    <div class="the-home-top" v-if="type === 'top'">
      <div class="home-logo"></div>
      <div class="home-top-menu">
        <el-menu mode="horizontal"
                 :default-active="defaultMenuSelected"
                 @select="handleMenuChange">
          <el-menu-item v-for="item in menuList"
                        :key="item.id"
                        :index="item.id.toString()">{{item.name}}</el-menu-item>
        </el-menu>
      </div>
      <div class="home-user"></div>
    </div>
    <div class="the-home-left" v-if="type !== 'top'">31</div>
    <div class="the-home-content" :class="[type !== 'top' ? 'the-home-right' : '']">
      <router-view/>
    </div>
  </div>
</template>

<script>
import menu from '../menu'
import * as _ from 'lodash'
export default {
  name: 'TheHome',
  data () {
    return {
      type: 'top',
      menuList: menu,
      defaultMenuSelected: '1'
    }
  },
  methods: {
    handleMenuChange (key) {
      console.log(this.menuList, key)
      console.log(_.find(this.menuList, ['id', Number(key)]).children[0].config.route.name)
      if (_.find(this.menuList, ['id', Number(key)]).children.length > 0) {
        this.$router.push({ name: _.find(this.menuList, ['id', Number(key)].children[0].config.route.name) })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/style/common";
.the-home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .the-home-top {
    height: $--top-menu-height;
    width: 100%;
    box-shadow: 5px 5px 15px $--shadow-color-primary;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    .home-logo {
      height: 100%;
      width: 200px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .home-top-menu {
      width: calc(100% - 400px);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .el-menu {
        height: 100%;

        .el-menu-item {
          height: 100%;
          line-height: $--top-menu-height;
        }
      }
    }

    .home-user {
      height: 100%;
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .the-home-content {
    width: 100%;
    height: calc(100% - 48px);
  }

  .the-home-left {
    width: 250px;
    height: 100%;
  }

  .the-home-right {
    width: calc(100% - 250px);
    height: 100%;
  }
}
</style>
