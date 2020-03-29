<template>
  <div class="login">
    <el-row class="login-row">
      <el-col>
        <el-card class="login-box" style="width:400px;margin:0 auto" v-loading=""
                 element-loading-background="rgba(0, 0, 0, 0.8)">
          <el-form ref="userInfo" :model="userInfo" :rules="loginRules">
            <h1 class="title">web-admin</h1>
            <el-form-item>
              <el-input type="text" v-model="userInfo.username" auto-complete="off" placeholder="请输入用户名..."
                        suffix-icon="el-icon-bell"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password" v-model="userInfo.password" auto-complete="off" placeholder="请输入密码..."
                        suffix-icon="el-icon-edit"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleLogin" class="pull-right" style="width:100%">
                登录
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleLogOut" class="pull-right" style="width:100%">
                登出
              </el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Message } from 'element-ui'
import {getToken, setToken, removeToken} from '../utils/auth'
export default {
  name: 'Login',
  data () {
    const validateUsername = (role, value, callback) => {
      if (isValidUsername(value)) {
        callback(new Error('请输出正确的用户名'))
      } else {
        callback()
      }
    }

    // 验证用户名密码
    const isValidUsername = (str) => {
      const validMap = ['admin', 'editor']
      Message.info('登录成功')
      return validMap.indexOf(str.trim()) >= 0
    }

    const validatePass = (role, value, callback) => {
      if (value.length <= 5) {
        callback(new Error('密码长度不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      userInfo: {
        username: 'admin',
        password: '123456'
      },
      // form rule
      loginRules: {
        username: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePass}]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  methods: {
    handleLogin () {
      debugger
      setToken('token')
      console.log(getToken())
      this.$router.push({ path: this.redirect || '/' })
    },
    handleLogOut () {
      debugger
      console.log(getToken())
      removeToken()
      this.$router.push({ path: this.redirect || '/' })
    }
  }
}
</script>

<style>
  .login {
    /*background: url(../assets/logo.png) no-repeat scroll center center / cover;*/
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .login-box {
    background: #ffffff;
    border: none;
  }

  .login-box .title {
    color: #000000;
    text-align: center;
  }

  .login-row {
    margin-top: 160px;
    z-index: 1;
  }
</style>
