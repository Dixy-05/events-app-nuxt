<template lang="pug">
  section(class="section")
    h2(class="title is-3 has-text-grey") "Just start
      b-icon(icon="rocket" size="is-large") "
    h3(class="subtitle is-6 has-text-grey")
  //- VueTrix(inputId="editor1" v-model="editorContent" placeholder="enter your content...")
</template>

<script>
// import VueTrix from 'vue-trix'
export default {
  name: 'InspirePage',
  // components: {
  //   VueTrix,
  // },
  data() {
    return {
      editorContent: '<h1>Editor contents</h1>',
    }
  },
}
</script>
