<template>
  <div class="header-page">
    <a href="#/" class="logo">
      <span class="logo-name">ceshi</span>
    </a>
    <span class="loyout" @click="loyout">退出</span>
    <span class="userName">姓名: {{userName}}</span>
  </div>
</template>

<style lang="stylus" scoped>
  .header-page{
    height: 50px;
    background: #FFF;
    
    line-height: 50px;
    text-align: left;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    .logo{
      width: 100px;
      text-decoration-line: none;
      display: inline-block;
      padding-left: 20px;
      box-shadow: 2px 0 6px rgba(0,21,41,0.35);
      .logo-name{
        font-weight: 600;
        font-size: 20px;
      }
    }
    .loyout{
      float: right;
      margin-right: 20px;
      font-size: 14px;
    }
    .userName{
      float: right;
      margin-right: 60px;
      cursor: pointer;
    }
  }
</style>

<script>
export default {
  name: 'Header',
  data () {
    return {
      userName: ''
    }
  },
  created () {
    this.userName = window.sessionStorage.account || ''
  },
  methods: {
    loyout () {
      window.location.href = '/'
    }
  }
}
</script>

