<template>
	<div class="workEducation">
		<h1>Work experience</h1>
		<div class="workEducation__content">
			<Experience v-for="(workExperience, key) in work" :key="key" :title="workExperience.title" :place="workExperience.place" :duration="workExperience.duration" :clickable="workExperience.clickable"></Experience>
		</div>
		<h1>Education</h1>
		<div class="workEducation__content">
			<Experience v-for="(education, key) in education" :key="key" :title="education.title" :place="education.place" :duration="education.duration" :clickable="education.clickable"></Experience>
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
					title: 'Master of Information Technology',
					place: 'NUI Galway, Ireland',
					duration: 'Session: 2014-2015',
					clickable: false
				}, {
					title: 'Bachelor\'s degree in managment',
					place: 'Högskolan i Halmstad, Sweden',
					duration: 'Session: 2012-2013',
					clickable: false
				},
				{
					title: 'Bachelor in international managment',
					place: 'Groupe ESC Troyes, France',
					duration: 'Session: 2010-2014',
					clickable: false
				}],
				work: [{
					title: 'Product owner',
					place: 'Jogogo, Montreal',
					duration: '2018-2019',
					clickable: true
				}, {
					title: 'Product owner',
					place: 'Technology Evaluation Centers, Montreal',
					duration: '2017-2018',
					clickable: true
				},
				{
					title: 'Growth hacker & Product manager',
					place: 'Placeloop, Paris',
					duration: '2015-2017',
					clickable: true
				},
				{
					title: 'Growth hacker & Product manager',
					place: 'Pryv, Lausanne',
					duration: '2014',
					clickable: true
				}],
		}}
	}
</script>
