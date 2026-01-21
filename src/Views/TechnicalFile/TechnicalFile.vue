<template>
	<div class='technicalFile'>
		<div class="technicalFile-content">
			<router-link :to="{ name: 'CV' }" class="back-to-resume">
				<i class="fas fa-arrow-left"></i>{{strings.en.technicalFile.back}}
			</router-link>
			<h1>Summary</h1>
			<p v-for="(pitchParagraph, key) in strings.en.portfolio.elevatorPitch.pitch" :key="key">
				{{ pitchParagraph }}
			</p>
			<h1>Work</h1>
			<div class="work-experience-list">
				<TechnicalFileEntry
					v-for="(work) in strings.en.portfolio.work"
					:key="work.place"
					:content="work"
					title="Work"
					class="work-experience-entry"
				/>
			</div>
			<h1>Skills</h1>
			<TechnicalFileEntry
				v-for="(skill) in strings.en.portfolio.skills" :key="skill.name" :content="skill" title="Skills"
			></TechnicalFileEntry>
			<h1>Education</h1>
			<TechnicalFileEntry
				v-for="(education) in strings.en.portfolio.education" :key="education.place" :content="education" title="education"
			></TechnicalFileEntry>
			<h1>Personal projects</h1>
			<TechnicalFileEntry
				v-for="(project) in strings.en.portfolio.projects" :key="project.name" :content="project" title="project"
			></TechnicalFileEntry>
		</div>
		<TechnicalSideMenu></TechnicalSideMenu>
	</div>
</template>

<script>
import TechnicalFileEntry from './TechnicalFileEntry/TechnicalFileEntry';
import TechnicalSideMenu from './TechnicalSideMenu/TechnicalSidemenu';

import strings from '../../i18n.json';

export default {
	components: { TechnicalFileEntry, TechnicalSideMenu },
	data: function() {
		return {
			strings: strings
		};
	}
};</script>
