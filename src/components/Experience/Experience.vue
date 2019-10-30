<template>
	<div class="experience" @click="$emit('seeJob', experience)">
		<div class="experience__title">{{ experience.name }}</div>
		<div class="experience__place">{{ experience.place }}</div>
		<div class="experience__bottom">
			<div class="experience__duration">{{ experience.duration }}</div>
			<i class="fas fa-long-arrow-alt-right" v-if="experience.clickable"></i>
		</div>
	</div>
</template>

<script>
export default {
	props: [ 'experience' ]
};
</script>
