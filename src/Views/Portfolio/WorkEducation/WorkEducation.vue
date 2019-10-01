<template>
	<div class="workEducation">
		<h1>Work experience</h1>
		<div class="workEducation__content">
			<Experience v-for="(workExperience, key) in work" :key="key" :experience="workExperience" @seeJob="$emit('seeJob', $event)"></Experience>
		</div>
		<h1>Education</h1>
		<div class="workEducation__content">
			<Experience v-for="(education, key) in education" :key="key" :experience="education"></Experience>
		</div>
	</div>
</template>

<script>
	import Experience from '../../../components/Experience/Experience';

	import Jogogo from '../../../assets/work/jogogo.png';
	import Placeloop from '../../../assets/work/placeloop.jpg';
	import Pryv from '../../../assets/work/pryv.png';
	import Tec from '../../../assets/work/tec.jpg';

	export default {
		components: { Experience },
		data: function() {
			return {
				education: [{
					name: 'Master of Information Technology',
					place: 'NUI Galway, Ireland',
					duration: 'Session: 2014-2015',
					clickable: false
				}, {
					name: 'Bachelor\'s degree in managment',
					place: 'Högskolan i Halmstad, Sweden',
					duration: 'Session: 2012-2013',
					clickable: false
				},
				{
					name: 'Bachelor in international managment',
					place: 'Groupe ESC Troyes, France',
					duration: 'Session: 2010-2014',
					clickable: false
				}],
				work: [{
					name: 'Product owner',
					place: 'Jogogo, Montreal',
					duration: '2018-2019',
					description: '',
					cover: Jogogo,
					clickable: true
				}, {
					name: 'Product owner',
					place: 'Technology Evaluation Centers, Montreal',
					duration: '2017-2018',
					description: '',
					cover: Tec,
					clickable: true
				},
				{
					name: 'Growth hacker & Product manager',
					place: 'Placeloop, Paris',
					duration: '2015-2017',
					description: '',
					cover: Placeloop,
					clickable: true
				},
				{
					name: 'Growth hacker & Product manager',
					place: 'Pryv, Lausanne',
					description: '',
					cover: Pryv,
					duration: '2014',
					clickable: true
				}],
		}}
	}
</script>
