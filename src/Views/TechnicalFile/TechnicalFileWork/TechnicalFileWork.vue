<template>
	<div>
		<div class="technicalFileEntry__introduction">
			<p>{{ content.name }}</p>
			<p>{{ content.place }} {{ content.country }} </p>
			<p>{{ content.duration }}</p>
		</div>
		<div class="technicalFileEntry__content">
			<p>{{ content.description }}</p>
			<p>{{ content.context }}</p>
			<p>{{ content.appraisal }}</p>
			<ul v-if="content.results != ''">
				<li v-for="(results, key) in content.results" :key="key">{{ results }}</li>
			</ul>
			<ul v-if="content.technology != ''">
				<li v-for="(technology, key) in content.tech" :key="key">{{ technology }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: ['content', 'title'],
};
</script>
