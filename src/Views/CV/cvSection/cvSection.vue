<template>
	<div :class="className">
		<div class="section__name">{{ title }}<span class="section__nameEmphasis" v-if="title != 'Contact me'">.</span><span class="section__nameEmphasis" v-else>!</span></div>
		<cvEntry v-for="(entry, key) in content" :content="entry" :key="key" :title="title"></cvEntry>
	</div>
</template>

<script>
import cvEntry from './cvEntry/cvEntry';

export default {
	components: { cvEntry },
	props: [ 'title', 'content' ],
	computed: {
		className: function() {
			return 'cv__section ' + this.title.toLowerCase();
		}
	}
};
</script>
