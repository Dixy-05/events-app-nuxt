<template lang="pug">
div.container
	h1 Register to 
		b "{{event.title}}"
	section
		b-field(label="Rounded")
			b-input(placeholder="No label" rounded)

		b-field(label="Success" type="is-success")
			b-input(placeholder="Success")

		b-field(label="Error"
			type="is-danger"
			message="You can have a message too")
			b-input(placeholder="Error")

		b-field(label="Info" type="is-info")
			b-input(placeholder="Info")

		b-field(label="Warning" type="is-warning")
			b-input(placeholder="Warning")
		

		b-field(label="Disabled")
			b-input(placeholder="Disabled" disabled)

		b-field(label="Loading")
			b-input(placeholder="Loading" loading)
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Register',
  data(){
	  return {

		  form:{
			  firstName:'',
			  lastName:'',
			  email:''
		  }
	  }
  }
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
