<template>
	<div class="cv__container">
		<div class="cv">
			<div class="cv__header">
				<div class="header__veryTop">
					<div class="header__hi">Hello!</div>
					<div class="header__speech">My name is Adrien Dubois Ahlqvist, I’ve been a product owner, growth & product designer for about four years. I'm a maker, a jack of all trades: I do what needs to be done to create and deploy products that enable users to solve their pains. I’m motivated, dynamic and I'm all about rigorous method. </div>
				</div>
				<div class="header__into">adrien dubois ahlqvist, Product owner and Jack of all trades</div>
			</div>
			<div class="cv__content">
				<div class="cv__left">
					<cvSection title="Work" :content="works"></cvSection>
					<cvSection title="Projects" :content="projects"></cvSection>
				</div>
				<div class="cv__centerSeparator"></div>
				<div class="cv__right">
					<cvSection title="Skills" :content="skills"></cvSection>
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
					place: 'Jogogo',
					country: 'Canada',
					duration: '2018-2019',
					description: 'Jogogo is a physical space analytics tool that lets its users track and engage their visitors based on their activity. I was the Product Owner for both the App and the API and implemented a SCRUM process that enabled us to complete the redesigns of both our App (React) and our API (GraphQL). Both of the APP and API were used by enterprise clients such as Decathlon, Desjardins, Asmodee, Telus, IBM and Cisco.'
				}, {
					name: 'Product owner',
					place: 'Technology Evaluation Centers',
					country: 'Canada',
					duration: '2017-2018',
					description: 'TEC is an enterprise tool that enables enterprises to find the software that best suits their needs. I acted as Product Owner for our website and tools and led a team of twenty people through a technological redesign of our websites and internal tools (ASP.NET and Kentico). I also oversaw and participated in the visual redesign of the website.'
				},
				{
					name: 'Growth hacker & Product manager',
					place: 'Placeloop',
					country: 'France',
					duration: '2015-2017',
					description: 'Placeloop is a trade marketing platform that enables brands to provide their resellers with marketing campaigns. I acted as Growth Hacker and Product Manager and was in charge of the app\'s design, implementation, adoption and revenue. Our biggest challenge was a mobile-first redesign of the application (React). Our clients included SAB Miller, Kérastase and L\'Oréal Professionnel.'
				},
				{
					name: 'Growth hacker & Product manager',
					place: 'Pryv',
					country: 'Switzerland',
					description: 'Pryv is a privacy-focused company that enables life loggers and self quantifiers to store and to access data to make sense of it. I acted as Growth Hacker and Product Manager and was in charge of the Apps\' release and adoption. I was also the point of contact between the business and development teams. Finally, I oversaw partnerships with Moves, Misfits and IFTTT.',
					duration: '2014'
				}],
				projects: [{

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
				]
		}}
	}
</script>
