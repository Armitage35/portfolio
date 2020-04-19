import CV from './Views/CV/CV.vue';
import Portfolio from './Views/Portfolio/Portfolio.vue';
import TechnicalFile from './Views/TechnicalFile/TechnicalFile';

export const routes = [
	{ path: '/', component: Portfolio },
	{ path: '/portfolio', component: Portfolio },
	{ path: '/cv', component: CV },
	{ path: '/resume', component: CV },
	{ path: '/technicalFile', component: TechnicalFile }
];
