<template>
	<div class="cv__container">
		<div class="cv">
			<div class="cv__header">
				<div class="header__veryTop">
					<div class="header__hi">Hello!</div>
					<div class="header__speech">My name is Adrien Dubois Ahlqvist, I’ve been a product owner, growth & product designer for about five years. I'm a maker, a jack of all trades: I do what needs to be done to create and deploy products that enable users to solve their pains. I’m motivated, dynamic and I'm all about rigorous method.</div>
				</div>
				<div class="header__into">Adrien Dubois Ahlqvist, Product owner and Jack of all trades</div>
			</div>
			<div class="cv__content">
				<div class="cv__left">
					<cvSection title="Work" :content="works"></cvSection>
				</div>
				<div class="cv__centerSeparator"></div>
				<div class="cv__right">
					<cvSection title="Skills" :content="skills"></cvSection>
					<cvSection title="Projects" :content="projects"></cvSection>
					<cvSection title="Education" :content="educations"></cvSection>
					<cvSection title="Contact me" :content="contact"></cvSection>
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

export default {
	components: { cvSection },
	data: function() {
		return {
			educations: [{
				name: 'Master of Information Technology',
				place: 'NUI Galway',
				country: 'Ireland',
				duration: '2014-2015',
				description: 'Formation that regroups technical courses (coding, software engineering) and digital marketing '
			}, {
				name: 'Bachelor\'s degree in managment',
				place: 'Högskolan i Halmstad',
				country: 'Sweden',
				duration: '2012-2013',
				description: 'Formation dedicated to technology and digital marketing. Writing of an essay about the spreading of brand trust in online communities '
			},
			{
				name: 'Bachelor in international managment',
				place: 'Groupe ESC Troyes',
				country: 'France',
				duration: '2010-2014',
				description: 'Generalist formation in management and business with a strong inclination toward international. Specialized in entrepreneurship '
			}],
			works: [{
				name: 'Product owner',
				place: 'Valtech',
				country: 'Canada',
				duration: '2018-2019',
				description: 'Valtech is a global business transformation agency delivering innovation with a purpose. We enable clients to anticipate tomorrow’s trends and connect more directly with consumers across their digital touch points while optimizing time-to-market and ROI. Some of the clients I worked with include Pratt & Whitney, Ferique, Stikeman & Eliott and Uni-Select.'
			},{
				name: 'Product owner',
				place: 'Jogogo',
				country: 'Canada',
				duration: '2018-2019',
				description: 'I was the Product Owner for both the App and the API and implemented a SCRUM process that enabled us to complete the redesigns of both our App (React) and our API (GraphQL). Both of the APP and API were used by enterprise clients such as Decathlon, Desjardins, Asmodee, Telus, IBM and Cisco.'
			}, {
				name: 'Product owner',
				place: 'Technology Evaluation Centers',
				country: 'Canada',
				duration: '2017-2018',
				description: 'I acted as Product Owner for our website and tools and led a team of twenty people through a technological redesign of our websites and internal tools (ASP.NET and Kentico). I also oversaw and participated in the visual redesign of the website.'
			},
			{
				name: 'Growth hacker & Product manager',
				place: 'Placeloop',
				country: 'France',
				duration: '2015-2017',
				description: 'I acted as Growth Hacker and Product Manager and was in charge of the app\'s design, implementation, adoption and revenue. Our biggest challenge was a mobile-first redesign of the application (React). Our clients included SAB Miller, Kérastase and L\'Oréal Professionnel.'
			},
			{
				name: 'Growth hacker & Product manager',
				place: 'Pryv',
				country: 'Switzerland',
				description: 'I acted as Growth Hacker and Product Manager and was in charge of the Apps\' release and adoption. I was also the point of contact between the business and development teams. Finally, I oversaw partnerships with Moves, Misfits and IFTTT.',
				duration: '2014'
			}],
			skills: [
				{
					name: 'code',
					description: ['JavaScript', 'CSS/SASS', 'React', 'Vue.js', 'Git', 'Node', 'CI/CD', 'SQL', 'MongoDB', 'RestAPI', 'GraphQL']
				},{
					name: 'design',
					description: [' Photoshop', 'Sketch', 'Adobe XD', 'InVision', 'Balsamiq wireframes', 'Illustrator']
				},{
					name: 'Product Managment',
					description: ['Jira', 'Confluence', 'GitHub', 'GitLab', 'Trello', 'Mixpanel', 'Google Analytics', 'Google Data Studio', 'Excel', 'Segment', 'Mailchimp']
				}
			],
			contact: [
				{
					name: 'email',
					description: 'adrien.dubois35@gmail.com',
					link: 'mailto:',
					icon: 'fa-envelope'
				},
				{
					name: 'telephone',
					description: '+1 438 924 3959',
					link: 'tel:',
					icon: 'fa-phone-alt'
				}
			],
			projects: [{
				name: 'Facebook Event Tracker',
				date: '2020',
				country: 'Canada',
				link: 'https://github.com/Armitage35/facebook-event-tracker',
				description: 'This project is a CLI tool that enables people who don\'t have a Facebook account to keep an eye out for events they want to part take in.'
			},
			{
				name: 'Fuzzy Roadmap',
				date: '2019',
				country: 'Canada',
				link: 'https://github.com/Armitage35/fuzzy-roadmap/',
				description: 'This easy to use tool will enable you to create fuzzy time roadmap in a matter of seconds.'
			},
			{
				name: 'Day2Day.wallpaper',
				date: '2018',
				country: 'Canada',
				link: 'https://github.com/Armitage35/day2day.wallpaper',
				description: 'Day2Day.wallpaper enable its users browse, discover and find amazing photos to use as their new wallpaper for their Chrome OS devices.'
			},{
				name: 'Day2Day.password',
				date: '2018',
				country: 'Canada',
				link: 'https://github.com/Armitage35/day2day.password',
				description: 'A Chrome extension that enables its users to create strong password on the fly.'
			},{
				name: 'Day2Day',
				date: '2017-2018',
				country: 'Canada',
				link: 'https://github.com/Armitage35/day2day',
				description: ' Application built with the MEAN stack that enables productive super-heros to supercharge their routines.'
			}]
		};}
};
</script>
