<template>
	<div class="clients">
		<h1>Clients</h1>
		<p class="clients__description">If you know these brands, chances are you have probably seen my work</p>
		<div class="clients__client-list">
			<img :src="client" class="clients__client" v-for="(client, key) in clients" :key="key">
		</div>
	</div>
</template>

<script>
import lOreal from '../../../assets/clients/loreal.png';
import kerastase from '../../../assets/clients/kerastase.png';
import desjardins from '../../../assets/clients/desjardins.png';
import decathlon from '../../../assets/clients/decathlon.png';
import asmodee from '../../../assets/clients/asmodee.png';
import ferique from '../../../assets/clients/ferique.png';
import telus from '../../../assets/clients/telus.png';
import grolsch from '../../../assets/clients/grolsch.png';

export default {
	data: function() {
		return {
			clients: [lOreal, kerastase, desjardins, decathlon, asmodee, ferique, telus, grolsch]
		};
	}
};
</script>
