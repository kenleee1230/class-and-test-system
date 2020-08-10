<template>
  <div>
    <el-form class="register_container">
      <div class="title_container">
        <h3 class="title">用户注册</h3>
      </div>

      <el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" class="registerForm">
        <el-form-item prop="name" class="user_name">
          <el-input
            prefix-icon="el-icon-user-solid"
            placeholder="请创建用户名"
            autocomplete="off"
            class="user_name_input"
            type="name"
            v-model="registerForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="user_pwd">
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            show-password
            placeholder="请创建密码"
            autocomplete="off"
            class="user_pwd_input"
            v-model="registerForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPass" class="user_pwd">
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            show-password
            placeholder="确认密码"
            autocomplete="off"
            class="user_pwd_input"
            v-model="registerForm.checkPass"
          ></el-input>
        </el-form-item>
        <el-form-item prop="email" class="user_name">
          <el-input
            prefix-icon="el-icon-message"
            placeholder="请输入邮箱"
            autocomplete="off"
            class="user_name_input"
            type="email"
            v-model="registerForm.email"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="register_button_container"
            type="primary"
            native-type="submit"
            @click="submitForm('registerForm')"
          >注册</el-button>
        </el-form-item>
      </el-form>
    </el-form>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("Name");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"));
      }
      setTimeout(() => {
        if (value === "") {
          callback(new Error("密码不能为空"));
        }
        if (value.length < "6") {
          callback(new Error("The password can not be less than 6 digits"));
        } else {
          if (this.registerForm.password !== "") {
            this.$refs.registerForm.validateField("Password");
          }
          callback();
        }
      }, 100);
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var checkMail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      setTimeout(() => {
        if (value === "") {
          callback(new Error("请输入邮箱"));
        } else {
          if (this.registerForm.password !== "") {
            this.$refs.registerForm.validateField("email");
          }
          callback();
        }
      }, 100);
    };
    return {
      registerForm: {
        name: "",
        password: "",
        checkPass: "",
        email: "",
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        email: [{ validator: checkMail, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //alert("submit!");
          this.$message({
            message:
              "Name: $(this.registerForm.name) ;  password: $(this.registerForm.password)",
          });
          this.$router.push("/index");
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

.register_container {
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

.register_button_container {
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