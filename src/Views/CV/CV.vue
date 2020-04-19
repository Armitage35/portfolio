<template>
	<div class="cv__container">
		<div class="cv">
			<div class="cv__header">
				<div class="header__veryTop">
					<div class="header__hi">Hello!</div>
					<div class="header__speech">My name is Adrien Dubois Ahlqvist, I’ve been a product owner, growth & product designer for about five years. I'm a maker, a jack of all trades: I do what needs to be done to create and deploy products that enable users to solve their pains. I’m motivated, dynamic and I'm all about rigorous method.</div>
				</div>
				<div class="header__into">Adrien Dubois Ahlqvist, Product owner and Jack of all trades</div>
			</div>
			<div class="cv__content">
				<div class="cv__left">
					<cvSection title="Work" :content="strings.en.cv.work"></cvSection>
				</div>
				<div class="cv__centerSeparator"></div>
				<div class="cv__right">
					<cvSection title="Skills" :content="updatedSkills"></cvSection>
					<cvSection title="Projects" :content="strings.en.cv.projects"></cvSection>
					<cvSection title="Education" :content="strings.en.cv.education"></cvSection>
					<cvSection title="Contact me" :content="strings.en.cv.contact"></cvSection>
				</div>
			</div>
			<div class="cv__footer">
				When do we start shipping?
			</div>
		</div>
	</div>
</template>

<script>
import cvSection from './cvSection/cvSection';

import strings from '../../i18n.json';

export default {
	components: { cvSection },
	data: function() {
		return {
			strings: strings,
		};
	},
	computed: {
		// This function destructures the skill objects to ignore the skill level
		updatedSkills: function() {
			let smallSkills = [];

			for (let i = 0; i < strings.en.cv.skills.length; i++) {
				let brandNewSkill = {};
				brandNewSkill.name = strings.en.cv.skills[i].name;
				brandNewSkill.description = [];

				for (let j = 0; j < strings.en.cv.skills[i].description.length; j++) {

					brandNewSkill.description.push(strings.en.cv.skills[i].description[j].name);
				}
				smallSkills.push(brandNewSkill);
			}
			return smallSkills;
		}
	}
};
</script>
