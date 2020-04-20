<template>
	<div class='technicalFile'>
		<div class="technicalFile-content">
			<router-link to="cv">
				<a href=""><i class="fas fa-arrow-left"></i>{{strings.en.technicalFile.back}}</a>
			</router-link>
			<h1>Summary</h1>
			<p v-for="(pitchParagraph, key) in strings.en.portfolio.elevatorPitch.pitch" :key="key">
				{{ pitchParagraph }}
			</p>
			<h1>Work</h1>
			<TechnicalFileEntry
				v-for="(work) in strings.en.portfolio.work" :key="work.place" :content="work" title="Work"
			></TechnicalFileEntry>
			<h1>Skills</h1>
			<TechnicalFileEntry
				v-for="(skill) in strings.en.cv.skills" :key="skill.name" :content="skill" title="Skills"
			></TechnicalFileEntry>
			<h1>Education</h1>
			<TechnicalFileEntry
				v-for="(education) in strings.en.cv.education" :key="education.place" :content="education" title="education"
			></TechnicalFileEntry>
			<h1>Personal projects</h1>
			<TechnicalFileEntry
				v-for="(project) in strings.en.portfolio.projects" :key="project.name" :content="project" title="project"
			></TechnicalFileEntry>
		</div>
		<TechnicalSidemenu></TechnicalSidemenu>
	</div>
</template>

<script>
import TechnicalFileEntry from './TechnicalFileEntry/TechnicalFileEntry';
import TechnicalSidemenu from './TechnicalSideMenu/TechnicalSidemenu';

import strings from '../../i18n.json';

export default {
	components: { TechnicalFileEntry, TechnicalSidemenu },
	data: function() {
		return {
			strings: strings
		};
	}
};</script>
