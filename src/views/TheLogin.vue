<template>
  <div class="the-login-container">
    <div class="login-box">
      <h1>登  录</h1>
      <el-form :model="form" ref="form" :rules="formRules">
        <el-form-item prop="userName">
          <template slot="label"><i class="icon iconfont icon-haoyourenzheng"></i></template>
          <el-input placeholder="请输入用户名"
                    v-model="form.userName"
                    class="animation-input-username"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="animation-input-password">
          <template slot="label"><i class="icon iconfont icon-mima"></i></template>
          <el-input placeholder="请输入密码"
                    type="password"
                    v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
<!--          <el-button type="primary" @click="login" class="animation-button">登录</el-button>-->
        </el-form-item>
      </el-form>
      <div class="operation-box">
        <el-button type="primary" @click="login" class="animation-button" @keyup.enter.native="login">登录</el-button>
      </div>
      <div>
      </div>
    </div>
<!--    <div class="login-copyright">版权所有©JasonJust</div>-->
  </div>
</template>

<script>
export default {
  name: 'TheLogin',
  data () {
    return {
      form: {
        userName: '',
        password: ''
      },
      formRules: {
        userName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 20, message: '密码长度为6~20字符', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
    this.keyupSubmit()
    setTimeout(() => {
      document.getElementsByClassName('animation-input-password')[0].style.visibility = 'visible'
    }, 1000)
    setTimeout(() => {
      // document.getElementsByClassName('animation-button')[0].style.visibility = 'visible'
      document.getElementsByClassName('animation-button')[0].style.display = 'block'
    }, 2000)
  },
  methods: {
    keyupSubmit () {
      document.onkeydown = e => {
        const _key = window.event.keyCode
        if (_key === 13) {
          this.login()
        }
      }
    },
    login () {
      this.$refs.form.validate((valide) => {
        if (valide) {
          this.$store.commit('setUserMessage', this.form)
          this.$router.push({ path: '/home' })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/style/common";
.the-login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: $--background-color-primary;
  position: relative;

  .login-box {
    height: 500px;
    width: 500px;
    box-shadow: 0px 0px 15px #ddd;
    margin-right: 15%;
    border-radius: 8px;
    text-align: center;
    /*display: flex;*/
    /*flex-wrap: wrap;*/
    /*justify-content: center;*/
    color: $--color-primary;

    /deep/ .el-form {
      width: 95%;
      margin: 0 auto;

      .el-form-item {
        display: flex;
        justify-content: center;

        .el-form-item__label {
          color: $--color-primary;
        }
        .el-form-item__content {
          display: flex;
          justify-content: center;

          .el-button {
            width: 100%;
          }
        }
      }
    }

    h1 {
      margin: 70px 0;
    }

    @keyframes username{
      0%{
        width: 50%;
        height: 50%;
      }

      25%{
        width: 100%;
        height: 100%;
      }

      50%{
        width: 80%;
        height: 80%;
      }

      100%{
        width: 100%;
        height: 100%;
      }
    }
    @keyframes password{
      0%{
        width: 100%;
        height: 100%;
      }

      25%{
        width: 80%;
        height: 80%;
      }

      50%{
        width: 100%;
        height: 100%;
      }

      100%{
        width: 90%;
        height: 90%;
      }
    }
    @keyframes buttonanimation{
      0%{
        width: 80%;
        height: 80%;
        font-size: 16px;
      }

      25%{
        width: 65%;
        height: 65%;
      }

      50%{
        width: 80%;
        height: 80%;
      }

      75%{
        width: 75%;
        height: 75%;
      }
    }

    .animation-input-username {
      animation:username 1.5s 1;
    }

    .el-form-item:nth-child(2) {
      animation:password 2s 1;
      animation-delay: 0.5s;
      visibility: hidden;
    }

    .operation-box {
      display: flex;
      justify-content: center;

      .animation-button {
        width: 77%;
        margin-left: 32px;
        animation-delay: 0.5s;
        animation:buttonanimation 1.5s 1;
        display: none;
      }
    }
  }

  .login-copyright {
    position: absolute;
    bottom: 0;
    height: $gap-xl;
    line-height: $gap-xl;
    width: 100%;
    text-align: center;
    background: $--card-background-color;
  }
}
</style>
