<template>
	<div class="technicalSideMenu">
		<h1>{{ strings.en.portfolio.home.title }}</h1>
		<div class="technicalSideMenu__photo"></div>
		<h2> {{ strings.en.portfolio.home.name }} {{ strings.en.portfolio.home.lastName }}</h2>
		<div class="technicalSideMenu__contact" v-for="(contactMethod, key) in strings.en.cv.contact" :key="key">
			<i :class="'fas ' + contactMethod.icon"></i>
			<a class="entry__contact" :href="contactMethod.link + contactMethod.description">{{ contactMethod.description }}</a>
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
