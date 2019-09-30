<template>
	<div class="portfolio">
		<Sidemenu></Sidemenu>
		<div class="portfolio__content">
			<Home></Home>
			<ElevatorPitch></ElevatorPitch>
			<Skills></Skills>
		</div>
	</div>
</template>

<script>
import Home from './Home/Home';
import ElevatorPitch from './ElevatorPitch/ElevatorPitch';
import Sidemenu from './Sidemenu/Sidemenu';
import Skills from './Skills/Skills';

export default {
	components: { ElevatorPitch, Home, Sidemenu, Skills }
}
</script>
