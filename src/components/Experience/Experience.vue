<template>
	<div class="experience">
		<div class="experience__title">{{ title }}</div>
		<div class="experience__place">{{ place }}</div>
		<div class="experience__bottom">
			<div class="experience__duration">{{ duration }}</div>
			<i class="fas fa-long-arrow-alt-right" v-if="clickable"></i>
		</div>
	</div>
</template>

<script>
export default {
	props: [ 'clickable', 'title', 'place', 'duration']
}
</script>
