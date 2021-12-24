<template lang="pug">
	div.container
		h1 Register to 
			b "{{event.title}}"
		div
			ValidationObserver
				section
					form
						ValidationProvider(rules="required" name="First Name" v-slot="{errors,valid}")
							b-field(label="First Name" :label-position="form.firstName!=''?'on-border':'inside'" :type="{'is-danger':errors[0],'is-success':valid}" :message="errors") helo
								b-input(placeholder="First Name" v-model="form.firstName" type='string' ) 
						b-field(label="Last Name" :label-position="form.lastName!=''?'on-border':'inside'" :type="submit==false?(form.lastName !=''? 'is-success':''):(form.lastName !=''?'is-success':'is-danger')" :message="submit&&form.lastName==''?'Most complete this field':''")
							b-input(placeholder="Last Name" v-model="form.lastName" type='string')
						b-field(label="Email" :label-position="form.email!=''?'on-border':'inside'" :type="submit==false?(form.email !=''? 'is-success':''):(form.email !=''?'is-success':'is-danger')" :message="submit&&form.email==''?'Most complete this field':''" )
							b-input(placeholder="Email" v-model="form.email" type='email' )
						b-button(class="is-primary" @click="onSubmit") Register
</template>
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { mapState } from 'vuex'

export default {
  name: 'Register',
  components: {
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
      },
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
  methods: {
    onSubmit() {
      console.log(this.form.firstName, this.form.lastName, this.form.email)
      this.submit = true
      //   this.form.firstName = ''
      //   this.form.lastName = ''
      //   this.email = ''
    },
  },
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
