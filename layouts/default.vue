<template lang="pug">
  div
    section
      b-navbar(class="is-primary")
        template(slot="brand")
          a(class="navbar-item" href="/")
            span(class="logo") Go Help
        template(slot="start")
          div(class="navbar-start")
            a(class="navbar-item" href="/documentation") Documentation
            div(class="navbar-item has-dropdown is-hoverable")
              a(class="navbar-link") More
              div(class="navbar-dropdown")
                a(class="navbar-item" href="/about") About
                a(class="navbar-item" href="/contact") Contact
                hr(class="navbar-divider")
                a(class="navbar-item" href="/reportIssue") Report an issue
                a(class="navbar-item" href="/admin") Admin
        template(slot="end")
          div(class="navbar-end")
            div(class="navbar-item")
              div(class="buttons")
                a(class="button is-primary")
                  strong Sign up
                a(class="button is-light" @click="cardModal")
                  |Log in
    section(class="main-content columns")
      aside(class="column is-2 section")
        ul(class="menu-list")
          li(v-for="(item, key) of items" :key="key")
            NuxtLink(:to="item.to" exact-active-class="is-active")
              b-icon(:icon="item.icon") 
              span {{ item.title }}
      div(class="container column is-10")
        Nuxt 



</template>

<script>
import ModalLogin from '@/components/modalLogin.vue'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      name: '',
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Events',
          icon: 'text-box-check',
          to: { name: 'events' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    }
  },

  methods: {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: ModalLogin,
        hasModalCard: true,
        customClass: 'custom-class custom-class-2',
        trapFocus: true,
      })
    },
  },
}
</script>
<style>
.logo {
  font-size: 1.4em;
  font-weight: bold;
}
</style>
