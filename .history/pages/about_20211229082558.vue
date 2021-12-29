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
							b-menu-item(icon='account-tie' label="President" @click="()=>getStaff('president',0)")
							b-menu-item(icon='account-edit' label="Secretary" @click="()=>getStaff('secretary',1)")
							b-menu-item(icon='account-cash-outline' label="Accountant"  @click="()=>getStaff('accountant',2)")
							b-menu-item(icon='account-voice' label="Developer"  @click="()=>getStaff('developer',3)")
							b-menu-item(icon='account-multiple-plus' label="Volunteers"  @click="()=>getStaff('volunteers',4)")
						b-menu-item(icon="book-open-page-variant" label="History" @click="()=>getHistory('history')")
					b-menu-list(label="Direction")
						b-menu-item(icon="telescope" label='Vision' @click="()=>getDirection('vision',0)")
						b-menu-item(icon="rocket-launch" label='Mission' @click="()=>getDirection('mission',1)")
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
				div(class='tile is-parent' v-if="about.staff[staffOption]")
					article(class="tile is-child notification is-success")
						p.title About 
						p.subtitle Staff
						div.content 
							p {{staff[staffIndex].title.toUpperCase()}}
							p(v-if="staff[staffIndex].firstName") - {{staff[staffIndex].firstName}} {{staff[staffIndex].lastName}}
							p - {{staff[staffIndex].description}}
				div(class='tile is-parent' v-if="about.history")
					article(class="tile is-child notification is-success")
						p.title About 
						p.subtitle {{history[0].title}}
						div.content {{history[0].description}}
				div(class='tile is-parent' v-if="about.direction[directionOption]")
					article(class="tile is-child notification is-success")
						p.title About 
						p.subtitle {{direction[directionIndex].title}}
						div.content {{direction[directionIndex].description}}
				
	
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'documentation',
  data() {
    return {
      about: {
        info: true,
        staff: {
          president: false,
          secretary: false,
          accountant: false,
          developer: false,
          volunteers: false,
        },
        history: false,
        direction: {
          vision: false,
          mission: false,
        },
      },
      staffOption: '',
      staffIndex: null,
      directionOption: '',
      directionIndex: null,
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
    staff: (state) => state.events.staff,
    history: (state) => state.events.history,
    direction: (state) => state.events.direction,
  }),
  async mounted() {
    await this.$store.dispatch('events/fetchStaff')
    await this.$store.dispatch('events/fetchHistory')
    await this.$store.dispatch('events/fetchDirection')
  },
  methods: {
    makeFalse() {
      this.about = {
        ...this.about,
        info: false,
        staff: {
          president: false,
          secretary: false,
          accountant: false,
          developer: false,
          volunteers: false,
        },
        history: false,
        direction: {
          vision: false,
          mission: false,
        },
      }
    },
    getInfo() {
      this.makeFalse()
      this.about = { ...this.about, info: true }
    },
    getStaff(title, index) {
      this.makeFalse()
      this.about.staff = { ...this.about.staff, [title]: true }
      this.staffOption = title
      this.staffIndex = index
    },
    getHistory() {
      this.makeFalse()
      this.about = { ...this.about, history: true }
    },
    getDirection(title, index) {
      this.makeFalse()
      this.about.direction = { ...this.about.direction, [title]: true }
      this.directionOption = title
      this.directionIndex = index
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
