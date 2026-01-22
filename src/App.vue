<template>
	<div id="app" role="application" aria-label="Adrien Dubois Ahlqvist Portfolio">
		<Views></Views>
	</div>
</template>

<script>
import './master.scss';
import Views from './Views/Views';

export default {
	name: 'app',
	components: { Views }
};
</script>
