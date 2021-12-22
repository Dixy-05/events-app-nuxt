<template lang="pug">
  div.details
    h1 {{event.title}}
    h4 {{event.description}}
    p.describe Date
    p {{event.date}} @ {{event.time}}
    p.describe Place
    h3 {{event.location}}
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
.describe {
  font-weight: bold;
}
h4 {
  font-size: 1.2em;
}
</style>
