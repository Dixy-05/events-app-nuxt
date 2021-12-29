<template lang="pug">
div
  .columns(class='main')
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
  .columns(class='second-main mt-6')
    .column(class='categoriesTitle is-quarter is-flex  is-justify-content-center') 
      h3 Categories
    .column(class="is-three-quarters")
      .columns
        .column(class="icons")
          p.iconTitle People
          b-icon(icon='account-heart' size="is-large" type="is-link")
        .column(class="icons")
          p.iconTitle Animal Welfare
          b-icon(icon='dog-side' size="is-large")
        .column(class="icons" )
          p.iconTitle Sustainability
          b-icon(icon='sprout' type="is-success" size="is-medium")
        .column(class="icons")
          p.iconTitle Care for the Planet
          b-icon(icon='web' size="is-medium" type="is-info")
 
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style scoped>
.main {
  margin-top: 3%;
  text-align: center;
}
.second-main {
  margin-bottom: 3em;
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
.categoriesTitle {
  font-size: 2em;
  color: coral;
}
.iconTitle {
  font-family: Cochin, Georgia, Times, 'Times New Roman',
    serif BlinkMacSystemFont;
}
.icons {
  cursor: pointer;
  border: 1px black solid;
  margin: 2px;
  transition: all 0.2s linear;
}
.icons:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>
