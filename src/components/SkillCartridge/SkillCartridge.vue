<template>
	<div class="skill">
		{{ skill }}
	</div>
</template>

<script>
export default {
	props: {
		skill: {
			type: String,
			required: true
		}
	}
};
</script>
