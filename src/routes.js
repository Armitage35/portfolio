

export const routes = [
	{ path: '/', component: () => import('./Views/Portfolio/Portfolio.vue'), meta: { title: 'Portfolio - Adrien Dubois Ahlqvist' } },
	{ path: '/portfolio', component: () => import('./Views/Portfolio/Portfolio.vue'), meta: { title: 'Portfolio - Adrien Dubois Ahlqvist' } },
	{ path: '/cv', component: () => import('./Views/CV/CV.vue'), meta: { title: 'CV - Adrien Dubois Ahlqvist' } },
	{ path: '/resume', component: () => import('./Views/CV/CV.vue'), meta: { title: 'CV - Adrien Dubois Ahlqvist' } },
	{ path: '/technicalFile', component: () => import('./Views/TechnicalFile/TechnicalFile.vue'), meta: { title: 'Technical File - Adrien Dubois Ahlqvist' } }
];
