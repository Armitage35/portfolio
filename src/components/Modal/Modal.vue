<template>
	<div class="modal__mask">
		<div class="modal">
			<div class="modal__header">
				<div class="modal__title">
					<h1>{{ content.name }}</h1>
					<i class="fas fa-times" @click="$emit('toggleModal')"></i>
				</div>
				<div class="modal__date" v-if="content.date">{{ content.date }}</div>
				<div class="modal__date" v-else>{{ content.place }}</div>
			</div>
			<div class="modal__body">
				<img class="modal__cover" :src="content.cover" />
				<div class="modal__text">
					<p class="modal__description">{{ content.description }}</p>
					<a class="modal__link" v-if="content.link" :href="content.link" target="_blank">Get to the project</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['content']
	}
</script>
