<template lang="pug">
h1 Events
EventCard(v-for="(event,index) in events" :key="index" :event="event" :data-index="index")    
</template>

<script>
// section(class="section")
//   div(class="columns is-mobile")

import EventCard from '~/components/eventCard'

export default {
  name: 'IndexPage',
  components: {
    EventCard,
  },
  // asyncData  is called each time before the page component is loaded
  async asyncData({ $axios }) {
    try {
      const response = await $axios.get('http://localhost:3004/events')
      console.log('response', response.data)
      return {
        events: response.data, // this will be merged with the component data, can be accessed from template/ No need to declare data()//
      }
    } catch (err) {
      console.log(err)
    }
  },
  head() {
    return {
      title: 'Event Listing',
    }
  },
}
</script>
<style scoped>
h1 {
  font-size: 1.5em;
}
</style>
