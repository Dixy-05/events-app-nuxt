<template lang="pug">
	div.container
		h1 Register to 
			b "{{event.title}}"
		div
			section
				form
					b-field(label="First Name" label-position="on-border")
						b-input(placeholder="First Name" v-model="firstName" :type="submit==false?(firstName !=''? 'is-success':''):(firstName !=''?'is-success':'is-danger')")
					//- b-button(type="is-primary")	Submit
</template>
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
