<template>
	<div>
		<router-view>
			<Portfolio></Portfolio>
			<Footer></Footer>
			<CV></CV>
		</router-view>
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
