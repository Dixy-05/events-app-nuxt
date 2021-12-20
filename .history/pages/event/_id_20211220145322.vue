<template lang="pug">
  div
    h1 {{id}}
    h2 {{event}}
</template>
<script>
export default {
  async asyncData({ $axios, error, params }) {
    try {
      const response = await $axios.get(
        'http://localhost:3004/events' + params.id
      )
      return {
        event: response.data, // this will be merged with the component data, can be accessed from template/ No need to declare data()//
      }
    } catch {
      error({
        statusCode: 503,
        message: 'Unable to fetch event #' + params.id,
      })
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 2em;
}
</style>
