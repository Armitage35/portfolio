<template>
	<div class='technicalFile'>
		<h1>{{strings.en.technicalFile.summary}}</h1>
		<p v-for="(paragraph, key) in strings.en.portfolio.elevatorPitch.pitch" :key="key">{{paragraph}}</p>
		<p v-for="(work, key) in strings.en.cv.work" :key="key">{{work.name}}</p>
	</div>
</template>

<script>

import strings from '../../i18n.json';

export default {
	data: function() {
		return {
			strings: strings
		};
	}
};</script>
