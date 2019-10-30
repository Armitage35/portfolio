<template>
	<div class="project" :style="'background-image: url(' + project.cover + ')'" @click="$emit('seeProject', project)">
		<div class="project__date">{{ project.date }}</div>
		<div class="project__bottom">
			<div class="project__name">{{ project.name }}</div>
			<i class="fas fa-long-arrow-alt-right"></i>
		</div>
	</div>
</template>

<script>
export default {
	props: ['project']
};
</script>
