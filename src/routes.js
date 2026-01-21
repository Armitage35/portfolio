import CV from './Views/CV/CV.vue';
import Portfolio from './Views/Portfolio/Portfolio.vue';
import TechnicalFile from './Views/TechnicalFile/TechnicalFile';

export const routes = [
	{ path: '/', component: Portfolio, meta: { title: 'Portfolio - Adrien Dubois Ahlqvist' } },
	{ path: '/portfolio', component: Portfolio, meta: { title: 'Portfolio - Adrien Dubois Ahlqvist' } },
	{ path: '/cv', component: CV, meta: { title: 'CV - Adrien Dubois Ahlqvist' } },
	{ path: '/resume', component: CV, meta: { title: 'CV - Adrien Dubois Ahlqvist' } },
	{ path: '/technicalFile', component: TechnicalFile, meta: { title: 'Technical File - Adrien Dubois Ahlqvist' } }
];
