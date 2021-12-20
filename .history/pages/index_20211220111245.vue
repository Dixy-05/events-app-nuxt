<template>
  <section class="section">
    <div class="columns is-mobile">
      <card title="Free" icon="github">
        Open source on <a href="https://github.com/buefy/buefy"> GitHub </a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey"> Every </b> component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with <a href="https://vuejs.org/"> Vue.js </a> and
        <a href="http://bulma.io/"> Bulma </a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">
        No other internal dependency
      </card>
      <newPage />
      <any />
    </div>
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
