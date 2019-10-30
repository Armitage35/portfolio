<template>
	<div class="testimonials">
		<h1>Testimonials</h1>
			<div class="testimonials__list">
			<Testimonial v-for="(testimonial, key) in testimonials" :key="key" :testimonial="testimonial"></Testimonial>
		</div>
	</div>
</template>

<script>
import Testimonial from '../../../components/Testimonial/Testimonial';

export default {
	components: { Testimonial },
	data: function() {
		return {
			testimonials: [
				{
					quote: 'Adrien is an awesome person to work with. While we were at Jogogo, he consistently demonstrated a solid work ethic plus a dedication for success. He is what I would call a natural born Product Owner. He embraces the product vision and have great understanding of the market in which the product evolves. He shows great leadership and is always looking for the greater good of his team & product.',
					person: 'Vincent Legault - Senior Software Architect'
				},
				{
					quote: 'I had the immense pleasure of working with Adrien for almost two years, and never once did he fail to impress me with his great attention to detail, rigorousness and brilliancy which made him a reference for everyone working with him. He can adapt, improvise and overcome any problem',
					person: 'Roméo Labonté - Senior Software Architect'
				},
				{
					quote: 'Adrien has the strength to hold and defend his good opinions and ideas, the knowledge and intelligence to justify them, and yet the humility to appreciate a good counterargument. He is the ultimate generalist: a reliable, incredibly adaptive problem-solver you can throw anything at, with an organized, analytical, clever, curious, passionate and ultimately rare mind',
					person: 'Simon Abramovitch - Senior SEO Consultant '
				}]
		};
	}
};
</script>
