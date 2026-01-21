import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
import { routes } from './routes.js';

Vue.config.productionTip = false;

Vue.use(VueRouter);


const router = new VueRouter({
	mode: 'hash',
	routes
});

// Set document title based on route meta
router.afterEach((to) => {
	if (to.meta && to.meta.title) {
		document.title = to.meta.title;
	} else {
		document.title = 'Adrien Dubois Ahlqvist';
	}
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
