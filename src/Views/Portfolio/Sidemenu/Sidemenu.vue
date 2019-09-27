<template>
	<div class="sidemenu">
		<div class="sidemenu__logo">
			<img src="../../../assets/armitageLogo.png">
			<span>Armitage <br/> web</span>
		</div>
		<div class="sidemenu__contact">
			<div class="sidemenu__contactDetails" v-for="(info, key) in contactsInfo" :key="key">
				<span>{{info.name}}</span>
				<a :href="info.link + info.content">{{ info.content }}</a>
			</div>
			<div class="sidemenu__contactDetails">
				<span>Find me on</span>
				<div class="sidemenu__socialIcons">
					<a v-for="social in socialNetworks" :href="social.link" :key='social.name'><i :class="social.icon"></i></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			contactsInfo: [{
				name: 'email',
				content: 'adrien.dubois35@gmail.com',
				link: 'mailto:'
			},
			{
				name: 'phone',
				content: '+1 438 924 3959',
				link: 'tel:'
			}],
			socialNetworks: [{
				name: 'Linkedin',
				link: 'https://www.linkedin.com/in/adrien-d-ahlqvist-4179b33b/',
				icon: 'fab fa-linkedin-in'
			},
			{
				name: 'GitHub',
				link: 'https://github.com/Armitage35/',
				icon: 'fab fa-github'
			},{
				name: 'Behance',
				link: 'https://www.behance.net/armitageweb',
				icon: 'fab fa-behance'
			}]
		}
	}
}
</script>
