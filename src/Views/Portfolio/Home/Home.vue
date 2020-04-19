<template>
	<div class="portfolio__home">
		<div class="home__picture"></div>
		<div class="home__content">
			<div class="home__name">
				<h1>{{strings.en.portfolio.home.name}}</h1>
				<h1 class="portfolio__lastName">{{strings.en.portfolio.home.lastName}}</h1>
			</div>
			<span class="home__legend">{{strings.en.portfolio.home.title}}</span>
			<hr class="home__orangeSeparator"/>
			<p class="home__pitch">{{strings.en.portfolio.home.homePitch}}</p>
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
import strings from '../../../i18n.json';

export default {
	data: function() {
		return {
			strings: strings
		};
	}
};
</script>
