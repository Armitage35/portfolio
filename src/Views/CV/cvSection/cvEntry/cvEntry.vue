<template>
<div>
	<div class="entry" v-if="title === 'Skills'">
		<div class="entry__title">{{ content.name }}</div>
		<div class="entry__body">{{content.description.join(', ')}}</div>
	</div>
	<div class="entry" v-else-if="title === 'Contact me'">
		<i :class="'fas ' + content.icon"></i>
		<a class="entry__contact" :href="content.link + content.description">{{ content.description }}</a>
	</div>
	<div class="entry" v-else>
		<div class="entry__title"
			><span class="entry__country">{{content.country}}</span>
			{{` - ${content.place} | ${content.duration}`}}
		</div>
		<div class="entry__role">{{ content.name }}</div>
		<div class="entry__body">{{content.description}}</div>
	</div>
	</div>
</template>

<script>
	export default {
		props: [ 'content', 'title' ]
	}
</script>
