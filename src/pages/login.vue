<template>
  <div class="login-page">
    <div class="login">
      <p>账号登录</p>
      <el-form ref="formData" :model="formData" :rules="rules" class="form">
        <el-form-item prop="userName">
          <div @keyup.enter="loginEnter()">
            <el-input placeholder="请输入账号" v-model.trim="formData.userName">
              <el-button class="icon-user" slot="prepend"></el-button>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item prop="password">
          <div @keyup.enter="loginEnter()">
            <el-input placeholder="请输入密码" v-model="formData.password" type="password">
              <el-button slot="prepend" class="icon-lock"></el-button>
            </el-input>
          </div>
        </el-form-item>
        <a class="a-forget" style="cursor: pointer;z-index: 1000;" @click="findPassword()">忘记密码？</a>
        <el-form-item>
          <el-button 
            class="btn-login el-button el-button-warning" 
            type="warning"
             @click="loginEnter()"
             @keyup.enter="loginEnter()">登&nbsp;&nbsp;录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
  mbg($src, $size = 100% 100%, $position = 0 0, $repeat = no-repeat) {
    background-image: url($src)
    background-size: $size
    background-position: $position
    background-repeat: $repeat
  }

  .login-page {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("../assets/image/bg.jpg");
    background-position: center;
    background-repeat: no-repeat;
    .logo {
      position absolute
      top 40px
      width 100%
      height 30px
    }
    .form {
      padding 30px 30px 30px
      .icon-user {
        width 46px
        mbg('../assets/image/icon-user.png', 16px 16px, center)
      }
      .icon-lock {
        width 46px
        mbg('../assets/image/icon-lock.png', 16px 16px, center)
      }
      .btn-login {
        color white
      }
      .a-forget {
        color orange
        font-size small
        position absolute
        right 24px
      }
      .btn-login {
        margin-top 20px
        width 100%
        background-color orange
      }
    }
  }

  .login {
    margin-top: 100px;
    margin-left: 100px;
    color: #909496;
    background-color whitesmoke
    border-radius 3px
    width: 320px;
    text-align: center;
    position: absolute;
    z-index: 100;
    opacity: 0;
    animation: loginShow 1s forwards;
    @keyframes loginShow {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }

      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
</style>
<script>
export default {
  data () {
    return {
      formData: {
        userName: '',
        password: ''
      },
      rules: {
        userName: {required: true, message: '请输入账号', trigger: 'blur'},
        password: {required: true, message: '请输入密码', trigger: 'blur'}
      }
    }
  },
  methods: {
    loginEnter () {
      this.$refs['formData'].validate((valid) => {
        if (valid) {
          window.sessionStorage.setItem('account', this.formData.userName)
          this.$emit('loginScuccess')
        }
      })
    },

    findPassword () {
      console.log("====findPassword====")
    }
  }
}
</script>

