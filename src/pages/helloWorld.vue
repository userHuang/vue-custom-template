<template>
  <div class="hello-world-page">
    {{text}}
  </div>
</template>

<style lang="stylus" scoped>
  .hello-world-page {
    color: red;
    padding: 20px;
  }
</style>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
      text: 'HelloWorld'
    }
  },

  created () {
    console.log('-----created------')
  }
}
</script>
