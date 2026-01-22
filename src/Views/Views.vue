<template>
	<div>
		<router-view/>
		<FooterComponent v-if="$route.path === '/portfolio' || $route.path === '/'"></FooterComponent>
	</div>
</template>

<script>

import FooterComponent from '../components/Footer/Footer';

export default {
	name: 'ViewsSection',
	components: { FooterComponent }
};
</script>
