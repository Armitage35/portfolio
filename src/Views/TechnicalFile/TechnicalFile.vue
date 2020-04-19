<template>
	<div class='technicalFile'>
		<h1>Summary</h1>
		<p v-for="(pitchParagraph, key) in strings.en.portfolio.elevatorPitch.pitch" :key="key">
			{{ pitchParagraph }}
		</p>
		<h1>Work</h1>
		<TechnicalFileWork
			v-for="(work) in strings.en.cv.work" :key="work.place" :content="work" title="Work"
		></TechnicalFileWork>
		<h1>Education</h1>
		<TechnicalFileWork
			v-for="(education) in strings.en.cv.education" :key="education.place" :content="education" title="education"
		></TechnicalFileWork>
		<h1>Personal projects</h1>
		<TechnicalFileWork
			v-for="(project) in strings.en.cv.projects" :key="project.place" :content="project" title="project"
		></TechnicalFileWork>
	</div>
</template>

<script>
import TechnicalFileWork from './TechnicalFileWork/TechnicalFileWork';

import strings from '../../i18n.json';

export default {
	components: { TechnicalFileWork },
	data: function() {
		return {
			strings: strings
		};
	}
};</script>
