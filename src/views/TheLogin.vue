<template>
  <div class="the-login-container">
    <div class="login-box">
      <h1>登  录</h1>
      <el-form :model="form" ref="form" :rules="formRules">
        <el-form-item prop="userName">
          <el-input placeholder="请输入用户名" v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码" type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
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
  methods: {
    login () {
      this.$refs.form.validate((valide) => {
        if (valide) {
          console.log('登录成功')
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
  @import "../assets/style/common";
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

      .el-form-item {
        .el-form-item__label {
          color: $--color-primary;
        }
        .el-form-item__content {
          .el-button {
            width: 100%;
          }
        }
      }
    }

    h1 {
      margin: 70px 0;
    }
  }

  .login-copyright {
    position: absolute;
    bottom: 0;
    height: $gap-xl;
    line-height: $gap-xl;
    width: 100%;
    text-align: center;
    background: $--vice-background-color;
  }
}
</style>
