<template lang="pug">
  div
    b-navbar(class="is-danger")
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
                    a(class="button is-dark")
                      strong Sign up
                    a(class="button is-light" @click="isShowModal = true")
                      |Log in
    div(class="tile")
      div(class="tile is-ancestor mt-3")
        div(class="tile is-parent is-vertical")
          article(class="tile is-child notification is-success")
            p(class="title") The is only for the administrators
          article(class="tile is-child notification is-warning")
            p(class="title") For editing all the information
        div(class="tile is-parent")
</template>
