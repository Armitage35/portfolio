<template>
	<button class="experience" @click="$emit('seeJob', experience)" :aria-label="'View ' + experience.name + ' at ' + experience.place">
		<div class="experience__title">{{ experience.name }}</div>
		<div class="experience__place">{{ experience.place }}, {{ experience.country }}</div>
		<div class="experience__bottom">
			<div class="experience__duration">{{ experience.duration }}</div>
			<i class="fas fa-long-arrow-alt-right" v-if="experience.clickable" aria-hidden="true"></i>
		</div>
	</button>
</template>


<script>
export default {
	name: 'ExperienceItem',
	props: [ 'experience' ]
};
</script>
