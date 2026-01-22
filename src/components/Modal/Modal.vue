<template>
	<div class="modal__mask" @keydown="handleEsc">
		<div class="modal" role="dialog" aria-modal="true" :aria-labelledby="'modal-title-' + content.name">
			<div class="modal__header">
				<div class="modal__title">
					<h2 :id="'modal-title-' + content.name">{{ content.name }}</h2>
					<button class="modal__close-btn" @click="$emit('toggleModal')" aria-label="Close dialog"><i class="fas fa-times" aria-hidden="true"></i></button>
				</div>
				<div class="modal__date">{{ dateOrName }}</div>
			</div>
			<div class="modal__body">
			<div class="modal__cover" :style="{ backgroundImage: 'url(' + content.cover + ')' }"></div>
				<div class="modal__text">
					<p class="modal__description" v-for="(description, index) in content.description" :key="index">{{ description }}</p>
					<a class="modal__link" v-if="content.link" :href="content.link" target="_blank" rel="noopener noreferrer">See the project<span class="sr-only"> (opens in new tab)</span>
						<i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppModal',
	props: ['content'],
	computed: {
		dateOrName: function() {
			return this.content.duration ? this.content.duration : this.content.place;
		}
	},
	mounted() {
		window.addEventListener('keydown', this.handleEsc);
		this.$nextTick(() => {
			const closeBtn = this.$el.querySelector('.modal__close-btn');
			if (closeBtn) closeBtn.focus();
		});
	},
	beforeDestroy() {
		window.removeEventListener('keydown', this.handleEsc);
	},
	methods: {
		handleEsc(e) {
			if (e.key === 'Escape' || e.key === 'Esc') {
				this.$emit('toggleModal');
			}
		}
	}
};
</script>
