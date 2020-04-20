<template>
	<div class="modal__mask" @keydown.esc="$emit('toggleModal')" tabindex="0">
		<div class="modal">
			<div class="modal__header">
				<div class="modal__title">
					<h1>{{ content.name }}</h1>
					<i class="fas fa-times" @click="$emit('toggleModal')"></i>
				</div>
				<div class="modal__date">{{ dateOrName }}</div>
			</div>
			<div class="modal__body">
				<div class="modal__cover" :style="'background-image: url(' + content.cover + ')'"></div>
				<div class="modal__text">
					<p class="modal__description">{{ content.description }}</p>
					<a class="modal__link" v-if="content.link" :href="content.link" target="_blank">See the project
						<i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['content'],
	computed: {
		dateOrName: function() {
			return this.content.duration ? this.content.duration : this.content.place;
		}
	}
};
</script>
