<template lang="pug">
div
	div.links
		nuxt-link(:to="{path:`/event/${event.id}`}" ) Details
		span.Vbar |
		nuxt-link(:to="{path:`/event/${event.id}/edit`}" ) Edit
	h1 This is the Edit page.
</template>
<style scoped>
h1 {
  font-size: 2em;
}
</style>
