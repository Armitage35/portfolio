import CV from './Views/CV/CV.vue';
import Portfolio from './Views/Portfolio/Portfolio.vue';

export const routes = [
	{ path: '/', component: Portfolio },
	{ path: '/portfolio', component: Portfolio },
	{ path: '/cv', component: CV }
];
