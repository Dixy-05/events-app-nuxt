<template>
  <section class="section">
    <div class="columns is-mobile"></div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import newPage from '@/pages/page'
import Any from '@/pages/any'

export default {
  name: 'IndexPage',
  components: {
    newPage,
    Card,
    Any,
  },
  async asyncData({ $axios }) {
    const response = await $axios.get('http://localhost:3004/events')
    return response.data // this will be merged with the component data, can be accessed from template/ No need to declare data()//
  },
}
</script>
