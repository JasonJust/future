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
                        :index="item.config.route.name">
            <i :class="item.config.icon" class="icon iconfont" v-if="item.config.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="home-user"></div>
    </div>
    <div class="the-home-vertical" :class="[type !== 'top' ? 'the-home-all' : '']">
      <el-menu class="el-menu-vertical-small"
               mode="vertical"
               v-if="type !== 'top'"
               :collapse="isCollapse"
               collapse-transition
               :default-active="defaultMenuSelected"
               @select="handleMenuChange">
        <el-menu-item v-for="item in menuList"
                      :key="item.id"
                      :index="item.config.route.name">
          <i :class="item.config.icon" class="icon iconfont" v-if="item.config.icon"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </el-menu>
      <div class="the-home-content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import menu from '@/menu'
export default {
  name: 'TheHome',
  data () {
    return {
      menuList: menu
    }
  },
  mounted () {
  },
  computed: {
    defaultMenuSelected () {
      return this.$route.name || 'index'
    },
    type () {
      return this.$store.state.menuType
    },
    isCollapse () {
      return !this.$store.state.elasticType
    }
  },
  methods: {
    handleMenuChange (routeName) {
      this.$router.push({
        name: routeName
      })
    }
  },
  watch: {
    '$store.state.themeType' () {
      switch (this.$store.state.themeType) {
        case 'default':
          document.getElementsByTagName('body')[0].style.setProperty('--backgroundDefault', 'transparent')
          // document.getElementsByClassName('the-home-content')[0].style.background = 'transparent'
          document.getElementsByClassName('the-home-content')[0].style.color = 'black'
          break
        case 'deep':
          document.getElementsByClassName('the-home-content')[0].style.color = '#ffffff'
          // document.getElementsByTagName('body')[0].style.setProperty('--colorDefault', '#ffffff')
          document.getElementsByTagName('body')[0].style.setProperty('--backgroundDefault', 'black')
          break
        case 'customized':
          document.getElementsByClassName('the-home-content')[0].style.color = 'white'
          document.getElementsByClassName('the-home-content')[0].style.background = ''
          document.getElementsByTagName('body')[0].style.setProperty('--backgroundDefault', 'orange')
          // document.getElementsByTagName('body')[0].style.setProperty('--backgroundDefault', 'linear-gradient(to left top, #2347ad, #0092ff)')
          break
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";
.the-home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  .the-home-top {
    height: $--top-menu-height;
    width: 100%;
    box-shadow: $--shadow-color-primary;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    z-index: 1;

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
        border: none;

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

  .the-home-vertical {
    display: flex;
    width: 100%;
    height: calc(100% - 48px);
    background-color: $--background-color-primary;
    @include scroll();

    .the-home-content {
      height: 100%;
      width: 100%;
      @include scroll();
      /*width: calc(100% - 32px);
      height: calc(100% - 32px);
      padding: $gap;*/
    }

    .el-menu-vertical-small {
      width: 65px;
      height: 100%;
      box-shadow: $--shadow-color-primary;
    }

    .el-menu-vertical-small:not(.el-menu--collapse) {
      width: 250px;
      height: 100%;
      @include scroll();
    }

    .the-home-right:not(.el-menu--collapse) {
      width: calc(100% - 65px);
      height: 100%;
    }
  }

  .the-home-all {
    height: 100%;
  }

  .icon {
    font-size: 18px;
    margin-right: 4px;
  }
}
</style>
