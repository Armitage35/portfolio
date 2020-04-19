<template>
	<div class="content__elevatorPitch" id="portfolio">
		<h1>My role</h1>
		<p v-for="(paragraph, key) in strings.en.portfolio.elevatorPitch.pitch" :key="key">{{paragraph}}</p>
	</div>
</template>

<script>
import strings from '../../../i18n.json';

export default {
	data: function() {
		return {
			strings: strings,
		};
	}
};
</script>
