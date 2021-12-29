<template lang="pug">
	div
		div.columns(class="main mt-6")
			div.column(class='is-4')
				b-menu
					b-menu-list(label='Menu')
						b-menu-item(icon="information-outline" label='info' active)
						b-menu-item(icon="account-supervisor" )
							template(#label="props")
								|Staff
								b-icon(class='is-pulled-right' :icon="props.expanded?'menu-up':'menu-down'")
							b-menu-item(icon='account-tie' label="President")
							b-menu-item(icon='account-edit' label="Secretary")
							b-menu-item(icon='account-cash-outline' label="Accountant")
							b-menu-item(icon='account-voice' label="Developer")
							b-menu-item(icon='account-multiple-plus' label="Volunteers")
						b-menu-item(icon="book-open-page-variant" label="History")
					b-menu-list(label="Direction")
						b-menu-item(icon="telescope" label='Vision')
						b-menu-item(icon="rocket-launch" label='Mission')
			div.tile
				div(class='tile is-parent')
					article(class="tile is-child notification is-success")
						p.title About 
						p.subtitle {{about}}
						div.content {{data}}
	
</template>
<script>
export default {
  name: 'documentation',
  data() {
    return {
      about: '',
    }
  },
  async fetch({ store, error, route }) {
    try {
      await store.dispatch('events/fetchInfo')
    } catch (err) {
      console.log(err)
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.',
      })
    }
  },
}
</script>
<style lang="css">
h1 {
  font-size: 2em;
}
p {
  font-size: 1.5em;
}
</style>
