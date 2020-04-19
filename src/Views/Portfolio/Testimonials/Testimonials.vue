<template>
	<div class="testimonials">
		<h1>Testimonials</h1>
			<div class="testimonials__list">
			<Testimonial v-for="(testimonial, key) in strings.en.portfolio.testimonials" :key="key" :testimonial="testimonial"></Testimonial>
		</div>
	</div>
</template>

<script>
import Testimonial from '../../../components/Testimonial/Testimonial';

import strings from '../../../i18n.json';

export default {
	components: { Testimonial },
	data: function() {
		return {
			strings: strings
		};
	}
};
</script>
