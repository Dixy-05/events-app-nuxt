<template lang="pug">
div
	h1 Register to {{event.title}}
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
export default {
  name: 'Register',
  props: ['event'],
}
</script>
