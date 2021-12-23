<template lang="pug">
div.container
	h1 Register to 
		b "{{event.title}}"
	section
		form
			b-field(label="Rounded")
				b-input(placeholder="No label" rounded)

			b-field(label="First Name" :type="submit==false?(firstName !=''? 'is-success':''):(firstName !=''?'is-success':'is-danger')")
				b-input(placeholder="Success" v-model="firstName")

			b-button(type="is-primary") Submit

<script>
import { mapState } from 'vuex'

export default {
  name: 'Register',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      submit: false,
    }
  },
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

  computed: mapState({
    event: (state) => state.events.event,
  }),
}
</script>
<style>
h1 {
  font-size: 2.5em;
  color: blueviolet;
  margin-top: 1em;
  margin-bottom: 1em;
}
.container {
  padding-right: 4em;
  padding-left: 2em;
}
</style>
