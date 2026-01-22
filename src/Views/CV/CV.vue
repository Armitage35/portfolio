<template>
	<div class="cv__container">
		<div class="cv">
			<div class="cv__header">
				<div class="header__veryTop">
					<div class="header__hi">Hello!</div>
					<div class="header__speech">My name is Adrien Dubois Ahlqvist, I’ve been a product owner, growth & product designer for over ten years. I'm a maker, a jack of all trades: I do what needs to be done to create and deploy products that enable users to solve their pains. I’m motivated, dynamic and I'm all about rigorous method.</div>
				</div>
				<div class="header__into">Adrien Dubois Ahlqvist, Senior Product Manager</div>
			</div>
			<div class="cv__content">
				<div class="cv__left">
					<cvSection title="Work" :content="strings.en.portfolio.work"></cvSection>
				</div>
				<div class="cv__centerSeparator"></div>
				<div class="cv__right">
					<cvSection title="Skills" :content="updatedSkills"></cvSection>
					<cvSection title="Projects" :content="restrictedAmountOfProject"></cvSection>
					<cvSection title="Education" :content="strings.en.portfolio.education"></cvSection>
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
import { skillSimplifierMixin } from '../../mixins/skillSimplifierMixin';

import strings from '../../i18n.json';

export default {
	name: 'CV',
	mixins: [ skillSimplifierMixin ],
	components: { cvSection },
	data: function() {
		return {
			strings: strings,
		};
	},
	computed: {
		restrictedAmountOfProject: function(){
			const max3Project = strings.en.portfolio.projects.splice(0, 3) ;
			return max3Project;
		}
	}
};
</script>
