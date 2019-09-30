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

	import Day2Day from '../../../assets/projects/day2day.png';
	import Day2DayPassword from '../../../assets/projects/day2dayPassword.png';
	import Day2DayWallapaper from '../../../assets/projects/day2dayWallpaper.png';

	export default {
		components: { Project },
		data: function() {
			return {
				projects: [{
					name: 'Fuzzy Roadmap',
					date: '2019',
					link: 'https://github.com/Armitage35/fuzzy-roadmap/',
					cover: 'assets/projects/day2day.png',
					description: 'This easy to use tool will enable you to create fuzzy time roadmap in a matter of seconds, available today at fuzzyroadmap.com. Fuzzy time roadmaps are tools that will let your main stakeholder keep an eye on what is currently being worked on as well as to know what is next. That being said, they fully embrace development uncertainties, especially time since you do don\'t give any estimate or timeline. Usually, you will want to report on four basic timelines: in progress, soon, later, done.'
				},
				{
					name: 'Day2Day.wallpaper',
					date: '2018',
					link: 'https://github.com/Armitage35/day2day.wallpaper',
					cover: Day2DayWallapaper,
					description: 'Chrome OS is an amazing OS but its wallpaper managment abilities are lacking, at best. Day2Day.wallpaper enable its users browse, discover and find amazing photos to use as their new wallpaper for their Chrome OS devices.'
				},{
					name: 'Day2Day.password',
					date: '2018',
					link: 'https://github.com/Armitage35/day2day.password',
					cover: Day2DayPassword,
					description: 'Day2Day password is a Chrome extension that enables its users to create strong password on the fly. This encourages you to use unique and strong password on each service you create an account for.'
				},{
					name: 'Day2Day',
					date: '2017-2018',
					link: 'https://github.com/Armitage35/day2day',
					cover: Day2Day,
					description: 'Day2Day is a Chrome extension for people who want to get more out of their days. It acts as a new homepage and provides you with a todo list, a notepad and access to your Pocket read list. It does that and displays amazing pictures from Unsplash as well as the weather to make sure you can truely get it all done in one place.'
				}]
			}
		}
	}
</script>
