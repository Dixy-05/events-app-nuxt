<template lang="pug">
	div
		div.columns
			div.column(class='is-6')
				b-menu
					b-menu-list(label='Menu')
						b-menu-item(icon="information-outline" label='info')
						b-menu-item(icon="account-supervisor" expanded)


			div.tile
	
</template>
<script>
export default {
  name: 'documentation',
}
</script>
<style lang="css">
h1 {
  font-size: 2em;
}
p {
  font-size: 1.5em;
}
</style>
