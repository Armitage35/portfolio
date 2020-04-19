<template>
	<div>
		<router-view>
			<Portfolio></Portfolio>
			<CV></CV>
			<TechnicalFile></TechnicalFile>
		</router-view>
		<Footer v-if="$route.path === '/portfolio' || $route.path === '/'"></Footer>
	</div>
</template>

<script>
import Portfolio from './Portfolio/Portfolio';
import Footer from '../components/Footer/Footer';
import CV from './CV/CV';
import TechnicalFile from './TechnicalFile/TechnicalFile';

export default {
	components: { CV, Portfolio, TechnicalFile, Footer }
};
</script>
