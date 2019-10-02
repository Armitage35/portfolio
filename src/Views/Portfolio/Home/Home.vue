<template>
	<div class="portfolio__home">
		<div class="home__picture"></div>
		<hr class="home__orangeSeparator"/>
		<div class="home__content">
			<div class="home__name">
				<h1>Adrien Dubois</h1>
				<h1 class="portfolio__lastName">Ahlqvist</h1>
			</div>
			<span class="home__legend">Product Owner, Web wizard, Boulderer</span>
			<p class="home__pitch">What does a product owner jack of all trades looks like? Like a whole lot of getting shit done. So, how soon are we shipping great stuff?</p>
			<div class="home__buttons">
				<a class="bttn-primary" href="#portfolio">Portfolio</a>
				<router-link to="cv">
					<a class="bttn-secondary" href="">Resume</a>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>
