<template>
  <div>
    <el-form class="login_container">
      <div class="title_container">
        <h3 class="title">系统登录</h3>
      </div>
      
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        class="loginForm"
      >
        <el-form-item prop="name" class="user_name">
          <el-input
            prefix-icon="el-icon-user-solid"
            placeholder="账号"
            autocomplete="off"
            class="user_name_input"
            type="name"
            v-model="loginForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" class="user_pwd">
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            show-password
            placeholder="密码"
            autocomplete="off"
            class="user_pwd_input"
            v-model="loginForm.checkPass"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login_button_container"
            type="primary"
            native-type="submit"
            @click="submitForm('loginForm')"
          >登录</el-button>
        </el-form-item>
      </el-form>

      <el-container class="extra-inf" name="输入提示及第三方登录" style="justify-content:space-between">
        <el-aside>
          <div class="tips_1">
            <span class="example">账号：admin</span>
            <span class="example">密码：随便填</span>
          </div>
          <div class="tips_2">
            <span class="example">账号：editor</span>
            <span class="example">密码：随便填</span>
          </div>
        </el-aside>
        <div class="third_party_login">
          <el-button type="primary">第三方登录</el-button>
        </div>
      </el-container>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.loginForm.checkPass !== "") {
          this.$refs.loginForm.validateField("Name");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      }
      setTimeout(() => {
        if (value === "") {
          callback(new Error("请输入密码"));
        }
        if (value.length < '6') {
          callback(new Error("The password can not be less than 6 digits"))
        }
        else {
          if (this.loginForm.checkPass !== "") {
            this.$refs.loginForm.validateField("checkPass");
          }
          callback();
        }
      }, 100);
    };
    return {
      loginForm: {
        name: "",
        checkPass: "",
      },
      rules: {
        name: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

html {
  line-height: 1.15;
}

body {
  height: 100%;
  width: 100%;
  background-color: #2b3a4d;
}

.login_container {
  position: relative;
  width: 450px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.title_container {
  justify-content: center;
  align-items: center;
  display: flex;
}

.title {
  font-size: 26px;
  color: #eee;
  margin: 0 auto 40px auto;
  text-align: center;
  font-weight: 700;
}

.el-form-item__content {
  height: 49.98px;
}

.user_name {
  display: block;
}

.user_name .el-input__prefix {
  position: absolute;
  padding: 0.65ex 0ex 0ex 10px;
  color: #889aa4;
  vertical-align: middle;
  left: 5px;
  display: inline-block;
  
}

.user_name_input {
  height: 1em;
  vertical-align: -0.15em;
}

.user_name input.el-input__inner {
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  background: rgba(0, 0, 0, 0.1);
  font-size: 14px;
  height: 49.98px;
  line-height: 36px;
  padding-left: 45px;
  color: #fff;
  caret-color: #fff;
}

.user_pwd {
  display: block;
}

.user_pwd .el-input__prefix {
  position: absolute;
  padding: 0.65ex 0ex 0ex 10px;
  color: #889aa4;
  vertical-align: middle;
  left: 5px;

  display: inline-block;
}

.user_pwd_input {
  height: 1em;
  vertical-align: -0.15em;
}

.user_pwd input.el-input__inner {
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 14px;
  height: 49.98px;
  line-height: 36px;
  padding-left: 45px;
  color: #fff;
  caret-color: #fff;
}

.user_pwd input.el-input__inner {
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #fff;
  height: 47px;
  caret-color: #fff;
}

.login_button_container {
  margin-bottom: 20px;
  width: 100%;
  margin-bottom: 30px;
}

.tips_1 {
  font-size: 0px;
  margin-bottom: 10px;
}

.el-aside {
  height: 48px;
}
.example {
  padding-right: 10px;
  font-size: 14px;
  color: #eee;
}

</style>