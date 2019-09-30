<template>
	<div class="portfolio">
		<Modal
			v-if="appState.modal.active"
			:content="appState.modal.content"
			@toggleModal="toggleModal"
		></Modal>
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
	import Modal from '../../components/Modal/Modal';

	export default {
		components: { ElevatorPitch, Home, Modal, Projects, Sidemenu, Skills, WorkEducation },
		data: function() {
			return {
				appState: {
					modal:{
						active: false,
						content: null,
					}
				}
			}
		},
		methods: {
			toggleModal: function(event) {
				this.appState.modal.active = !this.appState.modal.active;
				this.appState.modal.content = event;
			}
		}
	}
</script>
