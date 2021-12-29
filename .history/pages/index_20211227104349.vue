<template lang="pug">
div
  .columns
    div.column
      h1 Looking how to help others?
      p We have a list of events that you might be interested in.
      p Take a look at our events, and sign in for one or more 
        b-icon(icon="bullhorn")
        |For free !!
    div.column
      h2 Got new ideas for events?
      p 
        b Inspire 
        |us with your new ideas
      p and we will do our best to make them real
      b-icon(icon="creation")
  .columns
    .column(class='is-quarter') 
      p.categories We have different Categories
    .column(class='is-three-quarters')
      .columns
        .column
          p.iconTitle People
          b-icon(icon='account-heart')
        .column
          p.iconTitle Animals
          b-icon(icon='dog-side')
 
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
  margin-top: 1em;
  text-align: center;
}
h1 {
  font-size: 2em;
  font-weight: 500;
  color: coral;
}
h2 {
  font-size: 2em;
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
