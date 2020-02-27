<template>
	<div class="clients">
		<h1>Clients</h1>
		<div class="client-list">
			<div class="client" v-for="(client, key) in clients" :key="key">
				<img :src="client">
			</div>
		</div>
	</div>
</template>

<script>
import lOreal from '../../../assets/clients/lOrealPro.png';
import kerastase from '../../../assets/clients/kerastase.png';
import desjardins from '../../../assets/clients/desjardins.png';
import decathlon from '../../../assets/clients/decathlon.png';
import asmodee from '../../../assets/clients/asmodee.png';
import ferique from '../../../assets/clients/ferique.png';
import telus from '../../../assets/clients/telus.png';

export default {
	data: function() {
		return {
			clients: [lOreal, kerastase, desjardins, decathlon, asmodee, ferique, telus]
		};
	}
};
</script>
