<template>
	<div class="content__skills">
		<h1>Skills</h1>
		<p>My skills are in design, data science, front and back-end development. Being able to take a product or a feature from idea to adoption is what I thrive for.</p>
		<h2>Code</h2>
		<div class="skills_list">
			<SkillCartridge v-for="(codeSkill, key) in updatedSkills[0].description" :key="key" :skill="codeSkill"></SkillCartridge>
		</div>
		<h2>Design</h2>
		<div class="skills_list">
			<SkillCartridge v-for="(designSkill, key) in updatedSkills[1].description" :key="key" :skill="designSkill"></SkillCartridge>
		</div>
		<h2>Product Management</h2>
		<div class="skills_list">
			<SkillCartridge v-for="(productManagementSkill, key) in updatedSkills[2].description" :key="key" :skill="productManagementSkill"></SkillCartridge>
		</div>
	</div>
</template>

<script>
import SkillCartridge from '../../../components/SkillCartridge/SkillCartridge';

import strings from '../../../i18n.json';

export default {
	components: { SkillCartridge },
	data: function() {
		return {
			strings: strings
		};
	},
	computed: {
		// This function destructures the skill objects to ignore the skill level
		updatedSkills: function() {
			let smallSkills = [];

			for (let i = 0; i < strings.en.portfolio.skills.length; i++) {
				let brandNewSkill = {};
				brandNewSkill.name = strings.en.portfolio.skills[i].name;
				brandNewSkill.description = [];

				for (let j = 0; j < strings.en.portfolio.skills[i].description.length; j++) {

					brandNewSkill.description.push(strings.en.portfolio.skills[i].description[j].name);
				}
				smallSkills.push(brandNewSkill);
			}
			return smallSkills;
		},
		restrictedAmountOfProject: function(){
			const max3Project = strings.en.portfolio.projects.splice(0, 3) ;

			return max3Project;
		}
	}
};
</script>
