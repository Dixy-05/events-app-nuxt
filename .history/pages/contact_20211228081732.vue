<template lang="pug">
	div
		div(class="tile is-ancestor")
				div(class='tile')
					div(class="tile is-parent is vertical")
						article(class="tile is-child notification is-primary")
							p.title Vertical
							p.subtitle Top tile
						article(class="tile is-child notification is-danger")
							p.title ....tiles
							p.subtitle bottom tile
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
