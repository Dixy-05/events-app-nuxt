<template lang="pug">
div
  h1 Events
  EventCard(v-for="(event,index) in events" :key="index" :event="event" :data-index="index")   
  nuxt-link(:to="{path:'/events',query:{page:page+1}}") next
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
      page: this.$route.query.page,
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
  watchQuery: ['page'],
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
