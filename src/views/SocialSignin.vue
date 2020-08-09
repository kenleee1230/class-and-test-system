<template>
  <div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
      </el-form>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      hello: {
        a: 1
      }
    }
  },
  watch: {
    hello: {
      deep: true,
      handler () {

      }
    }
  },
  computed: {
    good () {
      return this.hello + 1
    }
  },
  created () {
    this.hello.a = 2
    Vue.set(this.hello, 'a', 2)
  },
  mounted () {},
  destroyed () {}
}
</script>