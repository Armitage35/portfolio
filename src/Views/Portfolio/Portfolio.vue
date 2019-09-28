<template>
	<div class="portfolio">
		<Sidemenu></Sidemenu>
		<Home></Home>
	</div>
</template>

<script>
import Home from './Home/Home';
import Sidemenu from './Sidemenu/Sidemenu';

export default {
	components: { Home, Sidemenu }
}
</script>
