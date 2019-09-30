<template>
	<div class="projects">
		<h1>Projects</h1>
		<div class="projects__content">
			<Project v-for="(project, key) in projects" :key="key" :date="project.date" :name="project.name" :cover="project.cover" :link="project.link" @seeProject="$emit('seeProject', $event)"></Project>
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
					cover: 'url("assets/projects/day2day.png")'
				},
				{
					name: 'Day2Day.wallpaper',
					date: '2018',
					link: 'https://github.com/Armitage35/day2day.wallpaper',
					cover: 'url("assets/projects/day2dayWallpaper.png")'
				},{
					name: 'Day2Day.password',
					date: '2018',
					link: 'https://github.com/Armitage35/day2day.password',
					cover: 'url("assets/projects/day2dayPassword.png")'
				},{
					name: 'Day2Day',
					date: '2017-2018',
					link: 'url("assets/projects/day2day.png")',
					cover: ''
				},]
			}
		}
	}
</script>
