<template>
	<div id="app">
		<Views></Views>
	</div>
</template>

<script>
import './master.scss';
import Views from './Views/Views';

export default {
	name: 'app',
	components: { Views }
}
</script>
