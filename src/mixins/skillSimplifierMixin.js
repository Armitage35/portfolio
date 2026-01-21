import strings from '../i18n.json';

export const skillSimplifierMixin = {
	computed: {
		updatedSkills: function () {
			// This function returns only the skill names as strings
			let smallSkills = [];

			for (let i = 0; i < strings.en.portfolio.skills.length; i++) {
				let brandNewSkill = {};
				brandNewSkill.name = strings.en.portfolio.skills[i].name;
				brandNewSkill.description = [];

				for (
					let j = 0;
					j < strings.en.portfolio.skills[i].description.length;
					j++
				) {
					// Only push the name string, not an object or percent
					brandNewSkill.description.push(
						strings.en.portfolio.skills[i].description[j].name
					);
				}
				smallSkills.push(brandNewSkill);
			}
			return smallSkills;
		},
	},
};
