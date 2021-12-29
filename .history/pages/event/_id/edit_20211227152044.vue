<template lang="pug">
div
	div.links
		nuxt-link(:to="{path:`/event/${event.id}`}" ) Details
		span.Vbar |
		nuxt-link(:to="{path:`/event/${event.id}/register`}" ) Register
	h1 This is the Edit page.
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    event: (state) => state.events.event,
  }),
}
</script>
<style scoped>
h1 {
  font-size: 2em;
}
</style>
