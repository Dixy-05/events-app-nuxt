<template lang="pug">
	div
		div(class="tile is-ancestor mt-3")
			div(class="tile is-vertical is-8")
				div(class='tile')
					div(class="tile is-parent is-vertical")
						article(class="tile is-child notification is-primary")
							p.title Phone Number
							p.subtitle +1 453 345 567
						article(class="tile is-child notification is-warning")
							p.title Email
							p.subtitle gohelp@mail.org
					div(class="tile is-parent")
						article(class="tile is-child notification is-info")
							p.title Address
							p.subtitle 765, Mongoose Street, Aid IL
							div.content You can also go to   
								b
									a(href="#") google maps link
								|  to find us.
				div(class='tile is-parent')
					article(class="tile is-child notification is-danger")
						p.title Got questions 
							b-icon(icon="account-question" size='is-large')
						p.subtitle Just contact us
						div.content We will be happy to answer 
			div(class='tile is-parent ')
				article(class="tile is-child notification is-success sideArticle")
					p.subtitle Show your
					p.title 
						b-icon(icon='cards-heart' size='is-large' type='is-danger')
					p.subtitle Change lives and
					p.title Go Help 

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
.sideArticle {
  text-align: center;
}
</style>
