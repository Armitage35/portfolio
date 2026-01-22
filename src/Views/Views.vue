<template>
	<div>
		<router-view/>
		<Footer v-if="$route.path === '/portfolio' || $route.path === '/'"></Footer>
	</div>
</template>

<script>

import Footer from '../components/Footer/Footer';

export default {
	name: 'ViewsSection',
	components: { Footer }
};
</script>
