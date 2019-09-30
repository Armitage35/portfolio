<template>
	<div class="project" :style="'background-image: ' + cover" @click="$emit('seeProject', name)">
		<div class="project__date">{{ date }}</div>
		<div class="project__bottom">
			<div class="project__name">{{ name }}</div>
			<i class="fas fa-long-arrow-alt-right"></i>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['name', 'date', 'link', 'cover']
	}
</script>
