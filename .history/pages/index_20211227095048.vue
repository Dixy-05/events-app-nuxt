<template lang="pug">
div
  .columns
    div.column(class='is-quarter')
    h1 Looking how to help others?
    p We have a list of events that you might be interested in.
    p Take a look at our events, and sign in for one or more
    p 
      b-icon(icon="bullhorn")
      |For free !!
    div.column(class='is-quarter')
    h2 Got new ideas for events?
    p 
      b Inspire 
      |us with your new ideas
    p and we will do our best to make them real
    b-icon(icon="creation")
  .columns
    .column 
      p this is special
      p this is especial special 
    .column 
      p this is another special column
      p this is the second special column
 
</template>

<script>
// section(class="section")
//   div(class="columns is-mobile")

export default {
  name: 'IndexPage',
}
</script>
<style scoped>
div {
  margin-top: 3em;
  text-align: center;
}
h1 {
  font-size: 2em;
  font-weight: 600;
  color: coral;
}
h2 {
  margin-top: 1em;
  font-size: 1.5em;
  font-weight: 500;

  color: coral;
}
p {
  font-size: 1.2em;
}
.column {
  text-align: center;
}
</style>
