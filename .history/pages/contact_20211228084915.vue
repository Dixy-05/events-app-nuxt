<template lang="pug">
	div
		//- div(class="tile is-ancestor")
			div(class="tile is-vertical is-8")
				div(class='tile')
					div(class="tile is-parent is-vertical")
						article(class="tile is-child notification is-primary")
							p.title Vertical
							p.subtitle Top tile
						article(class="tile is-child notification is-warning")
							p.title ....tiles
							p.subtitle bottom tile
					div(class="tile is-parent")
						article(class="tile is-child notification is-info")
							p.title middle tile
							p.subtitle with an image
				div(class='tile is-parent')
					article(class="tile is-child notification is-danger")
						p.title Wide tile
						p.subtitle Align with the right tile
						div.content Hello my friends how are you?
			div(class='tile is-parent')
				article(class="tile is-child notification is-success")
					p.title Tall tile
					p.subtitle With even more content
					div.content This is all the content for this tile.

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
