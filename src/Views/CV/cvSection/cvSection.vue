<template>
	<div class="cv__section">
		<div class="section__name">Work<span class="section__nameEmphasis">.</span></div>
		<cvEntry></cvEntry>
	</div>
</template>

<script>
	import cvEntry from './cvEntry/cvEntry';

	export default {
		components: { cvEntry }
	}
</script>
