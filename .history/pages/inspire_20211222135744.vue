<template lang="pug">
  section(class="section")
    h2(class="title is-3 has-text-grey") "Just start
      b-icon(icon="rocket" size="is-large")
      |"
    h3(class="subtitle is-6 has-text-grey")
    client-only
      VueTrix(v-model="editorContent" placeholder="Enter your content...")
    b-icon(icon="user-key-outline")
</template>

<script>
export default {
  name: 'InspirePage',
  components: {
    VueTrix: () => import('vue-trix'),
  },
  data() {
    return {
      editorContent: '',
    }
  },
}
</script>
