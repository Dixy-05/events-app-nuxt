<template lang="pug">
div
  h1 Events
  EventCard(v-for="(event,index) in events" :key="index" :event="event" :data-index="index")   
  nuxt-link(to="/inspire") Inspire
</template>

<script>
// section(class="section")
//   div(class="columns is-mobile")

import { mapState } from 'vuex'
import EventCard from '~/components/eventCard'

export default {
  name: 'IndexPage',
  components: {
    EventCard,
  },
  // asyncData  is called each time before the page component is loaded
  data() {
    return {
      Page: Number,
    }
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.',
      })
    }
  },
  head() {
    return {
      title: 'Event Listing',
    }
  },
  methods: {
    next() {
      this.Page += 1
    },
    prev() {
      this.Page -= 1
    },
  },
  computed: mapState({ events: (state) => state.events.events }),
}
</script>
<style scoped>
h1 {
  font-size: 2em;
}
</style>
