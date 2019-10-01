<template>
	<div class="entry">
		<div class="entry__title"><span class="entry__country">{{content.country}}</span>{{` - ${content.place} | ${content.duration}`}}</div>
		<div class="entry__role">{{ content.name }}</div>
		<div class="entry__body">{{content.description}}</div>
	</div>
</template>

<script>
	export default {
		props: [ 'content' ]
	}
</script>
