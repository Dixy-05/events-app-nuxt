<template lang="pug">
  div.details
    h1 {{event.title}}
    h4 {{event.description}}
    p.describe Date
    p.timeDate {{event.date}} @ {{event.time}}
    p.describe Place
    p.timeDate {{event.location}}
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
.details {
  text-align: center;
  margin-top: 5em;
}
h1 {
  color: rgb(67, 174, 201);
  font-size: 2.5em;
  font-weight: bold;
}
.describe {
  font-weight: bold;
}
h4 {
  font-size: 1.2em;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.timeDate {
  font-size: 1.1em;
}
</style>
