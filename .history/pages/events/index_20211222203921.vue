<template lang="pug">
div
  h1 Events
  EventCard(v-for="(event,index) in events" :key="index" :event="event" :data-index="index")   
  nuxt-link(:to="{path:'/events',query:{page:2}}") next
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
      page: 0,
    }
  },
  async fetch({ store, error, route }) {
    try {
      await store.dispatch('events/fetchEvents', {
        perPage: 3,
        page: route.query.page,
      })
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
  computed: mapState({ events: (state) => state.events.events }),
  async mounted() {
    try {
      await this.$store.dispatch('events/fetchEvents', {
        perPage: 3,
        page: this.$route.query.page,
      })
    } catch {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.',
      })
    }
  },
  methods: {
    next() {
      return (this.Page += 1)
    },
    prev() {
      return (this.Page -= 1)
    },
  },
}
</script>
<style scoped>
h1 {
  font-size: 2em;
}
</style>
