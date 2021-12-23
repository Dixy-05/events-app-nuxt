<template lang="pug">
div.main
  h1 Looking how to help others?
  p We have a list of events that you might be interested in.
  p Take a look at our events, and sign in for one or more
  p 
    b-icon(icon="bullhorn")
    |For free !!
  h2 Got new ideas for events?
  p 
    b Inspire 
    |us with your new ideas
  p and we will do our best to make them real
  b-icon(icon="creation")
 
</template>

<script>
// section(class="section")
//   div(class="columns is-mobile")

export default {
  name: 'IndexPage',
}
</script>
<style scoped>
.main {
  text-align: center;
}
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
</style>
