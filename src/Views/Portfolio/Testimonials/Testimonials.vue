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
				testimonials: [{
					quote: 'I had the immense pleasure of working with Adrien for almost two years, and never once did he fail to impress me with its notoriously wide palette of skills. His great attention to detail, rigorousness and brilliancy made him a reference for everyone working with him. He can adapt, improvise and overcome any problem',
					person: 'Roméo Labonté - Senior Software Architect'
				},
				{
					quote: 'Adrien is the ultimate generalist: a reliable, incredibly adaptive problem-solver you can throw anything at, with an organized, analytical, clever, curious, passionate and ultimately rare mind',
					person: 'Simon Abramovitch - Senior SEO Consultant '
				},
				{
					quote: 'His ability to verbalize complex technological issues in such a way as to make them easily understandable was a significant asset. Overall, he was a valued team member who allowed us to successfully create value out of chaos',
					person: 'Marine Godfroy - Retail Strategist'
				},]
			}
		}
	}
</script>
