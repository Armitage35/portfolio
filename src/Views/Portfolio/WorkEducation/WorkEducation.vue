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

// Load cover images for jobs
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
				description: 'Jogogo is a physical space analytics tool that lets its users track and engage their visitors based on their activity. I was the Product Owner for both the App and the API and implemented a SCRUM process that enabled us to complete the redesigns of both our App (React) and our API (GraphQL). Both of the APP and API were used by enterprise clients such as Decathlon, Desjardins, Asmodee, Telus, IBM and Cisco.',
				cover: Jogogo,
				clickable: true,
				link: 'https://www.behance.net/gallery/86647847/Jogogo-Location-analytics'
			}, {
				name: 'Product owner',
				place: 'Technology Evaluation Centers, Montreal',
				duration: '2017-2018',
				description: 'TEC is an enterprise tool that enables enterprises to find the software that best suits their needs. I acted as Product Owner for our website and tools and led a team of twenty people through a technological redesign of our websites and internal tools (ASP.NET and Kentico). I also oversaw and participated in the visual redesign of the website.',
				cover: Tec,
				clickable: true
			},
			{
				name: 'Growth hacker & Product manager',
				place: 'Placeloop, Paris',
				duration: '2015-2017',
				description: 'Placeloop is a trade marketing platform that enables brands to provide their resellers with marketing campaigns. I acted as Growth Hacker and Product Manager and was in charge of the app\'s design, implementation, adoption and revenue. Our biggest challenge was a mobile-first redesign of the application (React). Our clients included SAB Miller, Kérastase and L\'Oréal Professionnel.',
				cover: Placeloop,
				clickable: true
			},
			{
				name: 'Growth hacker & Product manager',
				place: 'Pryv, Lausanne',
				description: 'Pryv is a privacy-focused company that enables life loggers and self quantifiers to store and to access data to make sense of it. I acted as Growth Hacker and Product Manager and was in charge of the Apps\' release and adoption. I was also the point of contact between the business and development teams. Finally, I oversaw partnerships with Moves, Misfits and IFTTT.',
				cover: Pryv,
				duration: '2014',
				clickable: true
			}],
		};}
};
</script>
