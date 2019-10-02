<template>
	<div class="content__skills">
		<h1>Skills</h1>
		<p>My skills are in design, data science, front and back-end development. Being able to take a product or a feature from idea to adoption is what I thrive for.</p>
		<h2>Code</h2>
		<div class="skills_list">
			<SkillCartridge v-for="(codeSkill, key) in code" :key="key" :skill="codeSkill"></SkillCartridge>
		</div>
		<h2>Design</h2>
		<div class="skills_list">
			<SkillCartridge v-for="(designSkill, key) in code" :key="key" :skill="designSkill"></SkillCartridge>
		</div>
		<h2>Product Managment</h2>
		<div class="skills_list">
			<SkillCartridge v-for="(productManagmentSkill, key) in productManagment" :key="key" :skill="productManagmentSkill"></SkillCartridge>
		</div>
	</div>
</template>

<script>
	import SkillCartridge from '../../../components/SkillCartridge/SkillCartridge';

export default {
	components: { SkillCartridge },
	data: function() {
		return {
			code: ['JavaScript', 'CSS/SASS', 'React', 'Vue.js', 'Git', 'Node', 'CI/CD', 'SQL', 'MongoDB', 'RestAPI', 'GraphQL'],
			design: [' Photoshop', 'Sketch', 'Adobe XD', 'InVision', 'Balsamiq wireframes', 'Illustrator'],
			productManagment: ['Jira', 'Confluence', 'GitHub', 'GitLab', 'Trello', 'Mixpanel', 'Google Analytics', 'Google Data Studio', 'Excel', 'Segment', 'Mailchimp']
		}
	}
}
</script>
