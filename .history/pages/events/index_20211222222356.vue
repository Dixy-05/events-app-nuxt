<template lang="pug">
div
	h1 Events
	EventCard(v-for="(event,index) in events" :key="index" :event="event" :data-index="index")
	div.pagination   
		nuxt-link(:to="{path:'/events',query:{page:page+1}}") next &#10096;
		nuxt-link(:to="{path:'/events',query:{page:page-1}}") &#10096; prev
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
      page: +this.$route.query.page || 1,
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
}
</script>
<style scoped>
h1 {
  font-size: 2em;
}
.pagination {
  display: flex;
  justify-content: space-between;
  padding-left: 2em;
  padding-right: 5em;
}
</style>
