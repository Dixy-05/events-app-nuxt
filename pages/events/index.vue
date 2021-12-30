<template lang="pug">
  div
    h1 Events
    EventCard(v-for="(event,index) in events" :key="index" :event="event" )
    section
      b-pagination(:total="totalEvents" v-model='current' :per-page="eventsPerPage"  order="is-right")
        template(#default='props')
          b-pagination-button(:page='props.page' :id='`page${props.page.number}`' tag='nuxt-link' :to='`/events?page=${props.page.number}`')
            | {{(props.page.number) }}

        template(#previous='props')
          b-pagination-button(:page='props.page' tag='nuxt-link' :to='`/events?page=${!props.page.disabled?props.page.number:$route.query.page}`' )
            b-icon(icon="chevron-left")
            span Prev

        template(#next='props')
          b-pagination-button(:page='props.page' tag='nuxt-link' :to='`/events?page=${!props.page.disabled?props.page.number:$route.query.page}`' )
            span Next
            b-icon(icon="chevron-right")
</template>

<script>
// section(class="section")
//   div(class="columns is-mobile")
// nuxt-link(:to="{path:'/events',query:{page:page+1}}" ) next Pg &#10097;
// nuxt-link(:to="{path:'/events',query:{page:page-1}}" v-if="page !=1") &#10096; prev Pg

import { mapState } from 'vuex'
import EventCard from '~/components/eventCard'

export default {
  name: 'EventsPage',
  components: {
    EventCard,
  },
  // asyncData  is called each time before the page component is loaded
  data() {
    return {
      current: +this.$route.query.page || 1,
      rangeBefore: 2,
      rangeAfter: 1,
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
  computed: mapState({
    events: (state) => state.events.events,
    totalEvents: (state) => state.events.totalEvents,
    eventsPerPage: (state) => state.events.eventsPerPage,
  }),
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
