<template>
	<div class="workEducation">
		<h1>Work experience</h1>
		<div class="workEducation__content">
			<Experience v-for="(workExperience, key) in modifiedWork" :key="key" :experience="workExperience" @seeJob="$emit('seeJob', $event)"></Experience>
		</div>
		<h1>Education</h1>
		<div class="workEducation__content">
			<Experience v-for="(education, key) in strings.en.portfolio.education" :key="key" :experience="education"></Experience>
		</div>
	</div>
</template>

<script>
import Experience from '../../../components/Experience/Experience';

// Load cover images for jobs
import Jogogo from '../../../assets/work/jogogo.png';
import Placeloop from '../../../assets/work/placeloop.jpg';
import Pryv from '../../../assets/work/pryv.png';
import Tec from '../../../assets/work/tec.jpg';
import valtech from '../../../assets/work/valtech.jpg';
import ArmitageLogo from '../../../assets/armitageLogo.png';

import strings from '../../../i18n.json';

export default {
	components: { Experience },
	data: function() {
		return {
			strings: strings,
		};
	},
	computed: {
		modifiedWork: function() {
			let work = strings.en.portfolio.work;

			for (let i = 0; i <work.length; i++){
				switch (work[i].cover) {
				case 'Jogogo':
					work[i].cover = Jogogo;
					break;
				case 'Placeloop':
					work[i].cover = Placeloop;
					break;
				case 'Pryv':
					work[i].cover = Pryv;
					break;
				case 'Tec':
					work[i].cover = Tec;
					break;
				case 'valtech':
					work[i].cover = valtech;
					break;
				default:
					work[i].cover = ArmitageLogo;
					break;
				}
			}

			return work;
		}
	}
};
</script>
