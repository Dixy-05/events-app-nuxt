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
                a(class="button is-light" @click="isShowModal = true")
                  |Log in
    section(class="main-content columns")
      aside(class="column is-2 section")
        ul(class="menu-list")
          li(v-for="(item, key) of items" :key="key")
            NuxtLink(:to="item.to" exact-active-class="is-active")
              b-icon(:icon="item.icon") {{ item.title }}

      div(class="container column is-10")
        Nuxt 

    //- <!-- Login Modal -->
    div(class="modal" :class="{ 'is-active': isShowModal }")
      div(class="modal-background" @click="isShowModal = false") 
      div(class="modal-card")
        header(class="modal-card-head")
          p(class="modal-card-title") Login>
          button(class="delete"
            aria-label="close"
            @click="isShowModal = false") 
        section(class="modal-card-body")
          Modal Content
          b-field(label="Name")
            b-input(v-model="name")
       

          b-field(label="Email" type="is-danger" message="This email is invalid")
            b-input(type="email" value="john@" maxlength="30")

          b-field(label="Username" type="is-success" message="This username is available")
            b-input(value="johnsilver" maxlength="30")
          

          b-field(label="Password")
            b-input(type="password" value="iwantmytreasure" password-reveal)
        footer(class="modal-card-foot")
          button(class="button" @click="isShowModal = false") Cancel
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      name: '',
      isShowModal: false,
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
}
</script>
<style>
.logo {
  font-size: 1.4em;
  font-weight: bold;
}
</style>
