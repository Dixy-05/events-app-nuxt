<template>
  <div>
    <section>
      <b-navbar class="is-primary">
        <template slot="brand">
          <a class="navbar-item" href="/">
            <span class="logo">Go Help</span>
          </a>
        </template>
        <template slot="start">
          <div class="navbar-start">
            <a class="navbar-item" href="/documentation">Documentation</a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <a class="navbar-item" href="/about">About</a>
                <a class="navbar-item" href="/contact">Contact</a>
                <hr class="navbar-divider" />
                <a class="navbar-item" href="/reportIssue">Report an issue</a>
                <a class="navbar-item" href="/admin">Admin</a>
              </div>
            </div>
          </div>
        </template>
        <template slot="end">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary" v-on:click="isShowModal = true">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </template>
      </b-navbar>
    </section>
    <section class="main-content columns">
      <aside class="column is-2 section">
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <NuxtLink :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
    <!-- Login Modal -->
    <div class="modal" v-bind:class="{ 'is-active': isShowModal }">
      <div class="modal-background" v-on:click="isShowModal = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button
            class="delete"
            aria-label="close"
            v-on:click="isShowModal = false"
          ></button>
        </header>
        <section class="modal-card-body">Modal Content</section>
        <footer class="modal-card-foot">
          <button class="button" v-on:click="isShowModal = false">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
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
