<template>
	<div class="sidemenu">
		<div class="sidemenu__logo">
			<img src="../../../assets/armitageLogo.png" alt="Armitage logo">
			<span>Armitage <br/> web</span>
		</div>
		<div class="sidemenu__contact">
			<div class="sidemenu__contactDetails"
				v-for="(info, key) in strings.en.portfolio.sideMenu.contactsInfo"
				:key="key"
			>
				<span>{{info.name}}</span>
				<a :href="info.link + info.content">{{ info.content }}</a>
			</div>
			<div class="sidemenu__contactDetails">
				<span>{{ strings.en.portfolio.sideMenu.findMe }}</span>
				<div class="sidemenu__socialIcons">
					<a v-for="social in strings.en.portfolio.sideMenu.socialNetworks" target="_blank" :href="social.link" :key='social.name'><i :class="social.icon"></i></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import strings from '../../../i18n.json';

export default {
	data: function() {
		return {
			strings: strings,
		};
	}
};
</script>
