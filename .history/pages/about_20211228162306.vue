<template lang="pug">
	div
		div.columns(class="main mt-6")
			div.column(class='is-4')
				b-menu
					b-menu-list(label='Menu')
						b-menu-item(icon="information-outline" label='info' active @click="()=>getInfo('info')")
						b-menu-item(icon="account-supervisor" )
							template(#label="props" )
								|Staff
								b-icon(class='is-pulled-right' :icon="props.expanded?'menu-up':'menu-down'")
							b-menu-item(icon='account-tie' label="President" @click="()=>getStaff('president')")
							b-menu-item(icon='account-edit' label="Secretary" @click="()=>getStaff('secretary')")
							b-menu-item(icon='account-cash-outline' label="Accountant"  @click="()=>getStaff('accountant')")
							b-menu-item(icon='account-voice' label="Developer"  @click="()=>getStaff('developer')")
							b-menu-item(icon='account-multiple-plus' label="Volunteers"  @click="()=>getStaff('volunteers')")
						b-menu-item(icon="book-open-page-variant" label="History" @click="()=>getHistory('history')")
					b-menu-list(label="Direction")
						b-menu-item(icon="telescope" label='Vision' @click="()=>getDirection('vision')")
						b-menu-item(icon="rocket-launch" label='Mission' @click="()=>getDirection('mission')")
			div.tile
				div(class='tile is-parent')
					article(class="tile is-child notification is-success")
						p.title About 
						p.subtitle {{about}}
						div.content {{info.open}}
	
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'documentation',
  data() {
    return {
      about: {
        info: false,
        president: false,
        secretary: false,
        accountant: false,
        developer: false,
        volunteers: false,
        history: false,
        vision: false,
        mission: false,
      },
    }
  },
  async fetch({ store, error, route }) {
    try {
      this.about = { ...this.about, info: true }
      await store.dispatch('events/fetchInfo')
    } catch (err) {
      console.log(err)
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.',
      })
    }
  },
  computed: mapState({ info: (state) => state.events.info[0] }),
  methods: {
    get(title) {
      console.log(title, 'something cool')
      //   await this.$store.dispatch('events/fetchInfo',title)
    },
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
