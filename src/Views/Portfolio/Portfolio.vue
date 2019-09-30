<template>
	<div class="portfolio">
		<Sidemenu></Sidemenu>
		<div class="portfolio__content">
			<Home></Home>
			<ElevatorPitch></ElevatorPitch>
			<Skills></Skills>
			<WorkEducation></WorkEducation>
			<Projects @seeProject="toggleModal($event)"></Projects>
		</div>
	</div>
</template>

<script>
	import Home from './Home/Home';
	import ElevatorPitch from './ElevatorPitch/ElevatorPitch';
	import Sidemenu from './Sidemenu/Sidemenu';
	import Skills from './Skills/Skills';
	import WorkEducation from './WorkEducation/WorkEducation';
	import Projects from './Projects/Projects';

	export default {
		components: { ElevatorPitch, Home, Projects, Sidemenu, Skills, WorkEducation },
		data: () => {
			return {
				appState: {
					modal: false,
					modalContent: null
				}
			}
		},
		methods: {
			toggleModal: (event) => {
				console.log(event)
			}
		}
	}
</script>
