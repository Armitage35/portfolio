<template>
	<div class="cv__container">
		<div class="cv">
			<div class="cv__header">
				<div class="header__veryTop">
					<div class="header__hi">Hello!</div>
					<div class="header__speech">My name is Adrien Dubois Ahlqvist, I’ve been a product owner, growth & product designer for about four years. I'm a maker, a jack of all trades: I do what needs to be done to create and deploy products that enable users to solve their pains. I’m motivated, dynamic and I'm all about rigorous method. </div>
				</div>
				<div class="header__into">adrien dubois ahlqvist, Product owner and Jack of all trades</div>
			</div>
			<div class="cv__content">
				<div class="cv__left">
					<cvSection></cvSection>
				</div>
				<div class="cv__right">
					<cvSection></cvSection>
				</div>
			</div>
			<div class="cv__footer"></div>
		</div>
	</div>
</template>

<script>
	import cvSection from './cvSection/cvSection';

	export default {
		components: { cvSection }
	}
</script>
