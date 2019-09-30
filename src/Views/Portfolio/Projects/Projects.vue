<template>
	<div class="projects">
		<h1>Projects</h1>
		<div class="projects__content">
			<Project v-for="(project, key) in projects" :key="key" :date="project.date" :name="project.name" :cover="project.cover" :link="project.link"></Project>
		</div>
	</div>
</template>

<script>
import Project from '../../../components/Project/Project';

export default {
	components: { Project },
	data: () => {
		return {
			projects: [{
				name: 'Fuzzy Roadmap',
				date: '2019',
				link: 'https://github.com/Armitage35/fuzzy-roadmap/',
				cover: ''
			},
			{
				name: 'Day2Day.wallpaper',
				date: '2019',
				link: 'https://github.com/Armitage35/day2day.wallpaper',
				cover: ''
			},{
				name: 'Day2Day.password',
				date: '2019',
				link: 'https://github.com/Armitage35/day2day.password',
				cover: ''
			},{
				name: 'Day2Day',
				date: '2019',
				link: 'https://github.com/Armitage35/day2day',
				cover: ''
			},]
		}
	}
}
</script>
