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
import DetailServices from '@/services/contract'
import SearchServices from '@/services/search'

export default {
  name: 'HelloWorld',

  data () {
    return {
      text: 'HelloWorld'
    }
  },

  async created () {
    console.log('-----created------')
    this.getTop()
    this.searchValue()
  },

  methods: {
    async getTop () {
      const data = await DetailServices.getTop({
        type: 24,
        interval_id: '100:90',
        action:'',
        start: 0,
        limit: 1
      })
      console.log(data, '=====getTop======')
    },

    async searchValue () {
      const data = await SearchServices.searchValue({
        type: 24,
        interval_id: '100:90',
        action:'',
        start: 0,
        limit: 1
      })
      console.log(data, '======searchValue=====')
    }
  }
}
</script>
