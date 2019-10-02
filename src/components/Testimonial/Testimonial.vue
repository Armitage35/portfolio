<template>
	<div class="testimonial">
		<div class="testimonial__container">
			<div class="testimonial__body">
				<i class="fas fa-quote-left"></i>
				<div class="testimonial__quote">{{ testimonial.quote }}</div>
				<i class="fas fa-quote-right"></i>
			</div>
			<div class="testimonial__person">{{ testimonial.person }}</div>
		</div>
		<div class="testimonial__shadowContainer">
			<div></div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['testimonial']
	}
</script>
