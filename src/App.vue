<template>
  <div id="app">
    <div class="app-page" v-if="hasLogin">
      <nav-header />
      <router-view/>
    </div>
    <div class="app-page" v-else>
      <login @loginScuccess="loginScuccess"/>
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/common/Header'
import Login from '@/pages/login'
export default {
  name: 'App',
  components: {
    NavHeader, Login
  },
  data () {
    return {
      hasLogin: false
    }
  },
  methods: {
    loginScuccess () {
      this.hasLogin = true
      this.$router.push({
        path: '/helloWorld'
      })
    }
  },
  created () {
    if (window.sessionStorage.account) {
      this.hasLogin = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.app-page{
  width: 100%;
  height: 100%;
}
</style>
