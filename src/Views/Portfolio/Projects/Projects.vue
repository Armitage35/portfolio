<template>
	<div class="projects">
		<h1>Projects</h1>
		<div class="projects__content">
			<Project v-for="(project, key) in projects" :key="key" :project="project" @seeProject="$emit('seeProject', $event)"></Project>
		</div>
	</div>
</template>

<script>
	import Project from '../../../components/Project/Project';

	export default {
		components: { Project },
		data: function() {
			return {
				projects: [{
					name: 'Fuzzy Roadmap',
					date: '2019',
					link: 'https://github.com/Armitage35/fuzzy-roadmap/',
					cover: 'assets/projects/day2day.png'
				},
				{
					name: 'Day2Day.wallpaper',
					date: '2018',
					link: 'https://github.com/Armitage35/day2day.wallpaper',
					cover: 'assets/projects/day2dayWallpaper.png'
				},{
					name: 'Day2Day.password',
					date: '2018',
					link: 'https://github.com/Armitage35/day2day.password',
					cover: 'assets/projects/day2dayPassword.png'
				},{
					name: 'Day2Day',
					date: '2017-2018',
					link: 'https://github.com/Armitage35/day2day',
					cover: 'assets/projects/day2day.png',
				},]
			}
		}
	}
</script>
