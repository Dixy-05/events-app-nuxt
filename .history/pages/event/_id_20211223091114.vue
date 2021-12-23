<template lang="pug">
  div.details
    h1 {{event.title}}

    nuxt-link(to="/event/register") Register
      span.Vbar |
    nuxt-link(to="/event/register") Edit

    h4 {{event.description}}
    p.describe Date
    p.data {{event.date}} @ {{event.time}}
    p.describe Place
    p.data {{event.location}}
    p.ft Organized by 
      b {{event.organizer}}
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
  margin-bottom: 0.5em;
}
.describe {
  font-weight: bold;
}
h4 {
  font-size: 1.2em;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
}
.data {
  font-size: 1.1em;
}
.ft {
  margin-top: 1em;
}
.Vbar {
  font-weight: bold;
  margin: 0.5em 0.5em;
}
</style>
