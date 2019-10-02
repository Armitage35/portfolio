<template>
	<div>
		<router-view>
			<Portfolio></Portfolio>
			<CV></CV>
		</router-view>
		<Footer v-if="$route.path != '/cv'"></Footer>
	</div>
</template>

<script>
	import Portfolio from './Portfolio/Portfolio';
	import Footer from '../components/Footer/Footer';
	import CV from './CV/CV';

	export default {
		components: { CV, Portfolio, Footer }
	}
</script>
