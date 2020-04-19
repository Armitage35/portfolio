<template>
	<div class="projects">
		<h1>Projects</h1>
		<div class="projects__content">
			<Project
				v-for="(project, key) in modifiedProject"
				:key="key"
				:project="project"
				@seeProject="$emit('seeProject', $event)"
			></Project>
		</div>
	</div>
</template>

<script>
import Project from '../../../components/Project/Project';

import Day2Day from '../../../assets/projects/day2day.png';
import Day2DayPassword from '../../../assets/projects/day2dayPassword.png';
import Day2DayWallapaper from '../../../assets/projects/day2dayWallpaper.png';
import FuzzyRoadmap from '../../../assets/projects/fuzzyRoadmap.png';
import FacebookEventTracker from '../../../assets/projects/facebookEventTracker.jpg';
import ArmitageLogo from '../../../assets/armitageLogo.png';

import strings from '../../../i18n.json';

export default {

	components: { Project },
	data: function() {
		return {
			strings : strings
		};
	},
	computed: {
		modifiedProject: function() {
			let project = strings.en.portfolio.projects;

			for (let i = 0; i <project.length; i++){
				switch (project[i].cover) {
				case 'Day2Day':
					project[i].cover = Day2Day;
					break;
				case 'Day2DayPassword':
					project[i].cover = Day2DayPassword;
					break;
				case 'Day2DayWallapaper':
					project[i].cover = Day2DayWallapaper;
					break;
				case 'FuzzyRoadmap':
					project[i].cover = FuzzyRoadmap;
					break;
				case 'FacebookEventTracker':
					project[i].cover = FacebookEventTracker;
					break;
				default:
					project[i].cover = ArmitageLogo;
					break;
				}
			}

			return project;
		}
	}
};
</script>
