<template lang="pug">
  div.details
    h1 {{event.title}}
    h2 Category: {{event.category}}
    h4 {{event.description}}
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
.details {
  text-align: center;
  margin-top: 5em;
}
</style>
