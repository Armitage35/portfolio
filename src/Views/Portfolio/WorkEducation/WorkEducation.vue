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
				// @todo: populate work description and pictures
				work: [{
					name: 'Product owner',
					place: 'Jogogo, Montreal',
					duration: '2018-2019',
					description: '',
					cover: '',
					clickable: true
				}, {
					name: 'Product owner',
					place: 'Technology Evaluation Centers, Montreal',
					duration: '2017-2018',
					description: '',
					cover: '',
					clickable: true
				},
				{
					name: 'Growth hacker & Product manager',
					place: 'Placeloop, Paris',
					duration: '2015-2017',
					description: '',
					cover: '',
					clickable: true
				},
				{
					name: 'Growth hacker & Product manager',
					place: 'Pryv, Lausanne',
					description: '',
					cover: '',
					duration: '2014',
					clickable: true
				}],
		}}
	}
</script>
