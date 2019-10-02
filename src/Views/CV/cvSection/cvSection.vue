<template>
	<div class="cv__section">
		<div class="section__name">{{ title }}<span class="section__nameEmphasis">.</span></div>
		<cvEntry v-for="(entry, key) in content" :content="entry" :key="key" :title="title"></cvEntry>
	</div>
</template>

<script>
	import cvEntry from './cvEntry/cvEntry';

	export default {
		components: { cvEntry },
		props: [ 'title', 'content' ]
	}
</script>
