<template lang="pug">
	div
		h1 Event number: {{id}}
</template>
<script>
export default {
  props:{
    event:Object
  }
  computed: {
    id() {
      return this.$route.params.id
    },
  },
}
</script>
<style scoped>
h1 {
  text-align: center;
  font-size: 2em;
}
</style>
