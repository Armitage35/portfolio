<template>
	<div class="content__skills">
		<h1>Skills</h1>
		<p>My skills are in design, data science, front and back-end development. Being able to take a product or a feature from idea to adoption is what I thrive for.</p>
		<h2>Code</h2>
		<div class="skills_list">
			<SkillCartridge v-for="(codeSkill, key) in strings.en.portfolio.skills.code" :key="key" :skill="codeSkill"></SkillCartridge>
		</div>
		<h2>Design</h2>
		<div class="skills_list">
			<SkillCartridge v-for="(designSkill, key) in strings.en.portfolio.skills.design" :key="key" :skill="designSkill"></SkillCartridge>
		</div>
		<h2>Product Management</h2>
		<div class="skills_list">
			<SkillCartridge v-for="(productManagementSkill, key) in strings.en.portfolio.skills.productManagement" :key="key" :skill="productManagementSkill"></SkillCartridge>
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
	}
};
</script>
