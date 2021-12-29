<template>
  <div>
    <b-navbar class="is-danger">
      <template slot="brand">
        <a class="navbar-item" href="/">
          <span class="logo">Go Help/Admin</span>
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
              <a class="button is-dark">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </template>
    </b-navbar>
    <div class="tile">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <p class="title">The is only for the administrators</p>
          </article>
        </div>
        <div class="tile is-parent"></div>
      </div>
    </div>
  </div>
</template>
