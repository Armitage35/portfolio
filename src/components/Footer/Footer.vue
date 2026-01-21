<template>
	<div class="footer__container">
		<div class="footer">
			<div class="footer__left">
				<div class="footer__announce">{{ strings.en.portfolio.footer.brag }}</div>
				<a :href="strings.en.portfolio.footer.email.contact" target="_blank">{{ strings.en.portfolio.footer.email.legend}}</a>
			</div>
			<div class="footer__right">
				<div class="footer__author">{{ strings.en.portfolio.footer.copyrights }}</div>
				<a :href="strings.en.portfolio.footer.seeCode.link" target="_blank">{{ strings.en.portfolio.footer.seeCode.text }}</a>
			</div>
		</div>
	</div>
</template>


<script>
import strings from '../../i18n.json';

export default {
	name: 'AppFooter',
	data: function() {
		return {
			strings: strings
		};
	}
};
</script>
