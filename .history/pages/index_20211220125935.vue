<template lang="pug">
section(class="section")
  div(class="columns is-mobile")
    h1 Events
    eventCard(v-for="(events,index) in events" :key="index" :event="event" :data-index="index")    
</template>

<script>
import eventCard from '~/components/eventCard'

export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Event Listing',
    }
  },
  components: {
    eventCard,
  },
  async asyncData({ $axios }) {
    const response = await $axios.get('http://localhost:3004/events')
    return response.data // this will be merged with the component data, can be accessed from template/ No need to declare data()//
  },
}
</script>
<style scoped>
h1 {
  font-size: 1.5em;
}
</style>
