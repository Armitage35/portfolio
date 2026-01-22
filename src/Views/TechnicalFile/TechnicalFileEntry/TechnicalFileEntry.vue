<template>
	<div v-if="title != 'Skills'">
		<div class="technicalFileEntry__introduction">
			<p class="technicalFileEntry__position">{{ content.name }}</p>
			<div class="technicalFileEntry__details">
				<p class="technicalFileEntry__minorDetail"><i class="far fa-building" v-if="content.place"></i>{{ content.place }} </p>
				<p class="technicalFileEntry__minorDetail"><i class="far fa-flag"></i>{{ content.country }} </p>
				<p class="technicalFileEntry__minorDetail"><i class="far fa-calendar-alt"></i> {{ content.duration }}</p>
				<a :href="content.link"  target="_blank" class="technicalFileEntry__minorDetail" v-if="content.link"> <i class="fas fa-link"></i>See site</a>
			</div>
		</div>
		<div class="technicalFileEntry__content">
			<div class="technicalFileEntry__content--display" v-if="content.description">
				<h4>Company description</h4>
				<p v-for="(description, index) in content.description" :key="index">{{ description }}</p>
			</div>
			<div class="technicalFileEntry__content--display" v-if="content.context">
				<h4>Context</h4>
				<p>{{ content.context }}</p>
			</div>
			<div class="technicalFileEntry__content--display" v-if="content.appraisal">
				<h4>Appraisal</h4>
				<p>{{ content.appraisal }}</p>
			</div>
			<ul v-if="content.results != ''">
				<li v-for="(results, key) in content.results" :key="key">{{ results }}</li>
			</ul>
			<div class="technicalFileEntry__content--display" v-if="content.tech">
				<h4>Technologies</h4>
				<ul>
					<li v-for="(technology, key) in content.tech" :key="key">{{ technology }}</li>
				</ul>
			</div>
		</div>
		<hr class="technicalFileEntry__orangeSeparator"/>
	</div>
	<div v-else>
		<div class="technicalFileEntry__content">
			<div class="technicalFileEntry__content--display">
				<h4>{{content.name}}</h4>
				<ul>
					<li v-for="(skill, key) in content.description" :key="key">{{ typeof skill === 'string' ? skill : skill.name }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['content', 'title'],
};
</script>
