<template>
	<button class="project" :style="'background-image: url(' + project.cover + ')'" @click="$emit('seeProject', project)" :aria-label="'View ' + project.name + ' project from ' + project.duration">
		<div class="project__date">{{ project.duration }}</div>
		<div class="project__bottom">
			<div class="project__name">{{ project.name }}</div>
			<i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
		</div>
	</button>
</template>

<script>
export default {
	name: 'ProjectCard',
	props: ['project']
};
</script>
