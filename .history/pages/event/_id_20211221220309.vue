<template lang="pug">
  div.details(class="columns is-mobile")
    h1(class="column") {{event.title}}
    h2.column Category: {{event.category}}
    h4.column {{event.description}}
    p {{event.date}} @ {{event.time}}
    h3 Place: {{event.location}}
</template>
<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('events/fetchEvent', params.id)
    } catch {
      error({
        statusCode: 503,
        message: 'Unable to fetch event #' + params.id,
      })
    }
  },
  head() {
    return {
      title: this.event.title,
    }
  },
  computed: mapState({
    event: (state) => state.events.event,
  }),
}
</script>
<style scoped>
h1 {
  font-size: 2em;
}
/* .details {
  text-align: center;
} */
</style>
