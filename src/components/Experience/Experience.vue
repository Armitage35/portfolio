<template>
	<div class="experience">
		<div>{{ title }}</div>
		<div>{{ place }}</div>
		<div>{{ duration }}</div>
	</div>
</template>

<script>
export default {
	props: ['title', 'place', 'duration']
}
</script>
