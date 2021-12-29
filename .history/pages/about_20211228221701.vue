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
				div(class='tile is-parent' v-if="about.info" )
					article(class="tile is-child notification is-success")
						p.title About 
						p.subtitle Schedule
						div.content 
							p Opening time at 
								b {{info.open}}
							p Closing time at 
								b {{info.close}}
							p We are open from 
								b {{info.daysOpen}}
							p We are closed on 
								b {{info.daysClosed}}
				div(class='tile is-parent' v-if="about.staff")
					article(class="tile is-child notification is-success")
						p.title About 
						p.subtitle Staff
						div.content 
							p {{staff.title.toUpperCase()}}
							p - {{staff.firstName}} {{staff.lastName}}
							p {{staff.description}}
				div(class='tile is-parent' v-if="about.history")
					article(class="tile is-child notification is-success")
						p.title About 
						p.subtitle {{about}}
						div.content {{info.open}}
				div(class='tile is-parent' v-if="about.direction")
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
        info: true,
        staff: false,
        history: false,
        direction: false,
      },
    }
  },
  async fetch({ store, error, route }) {
    try {
      await store.dispatch('events/fetchInfo')
    } catch (err) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again.',
      })
    }
  },
  computed: mapState({
    info: (state) => state.events.info[0],
    staff: (state) => state.events.staff[0],
    history: (state) => state.events.history[0],
    direction: (state) => state.events.direction,
  }),
  methods: {
    makeFalse() {
      this.about = {
        ...this.about,
        info: false,
        staff: false,
        history: false,
        direction: false,
      }
    },
    async getInfo() {
      this.makeFalse()
      this.about = { ...this.about, info: true }
      await this.$store.dispatch('events/fetchInfo')
    },
    async getStaff(title) {
      this.makeFalse()
      this.about = { ...this.about, staff: true }
      await this.$store.dispatch('events/fetchStaff', title)
    },
    async getHistory() {
      this.makeFalse()
      this.about = { ...this.about, history: true }
      await this.$store.dispatch('events/fetchHistory')
    },
    async getDirection(title) {
      this.makeFalse()
      this.about = { ...this.about, direction: true }
      await this.$store.dispatch('events/fetchDirection', title)
    },
  },
}
</script>
<style lang="css">
h1 {
  font-size: 2em;
}
p {
  font-size: 1em;
}
</style>
