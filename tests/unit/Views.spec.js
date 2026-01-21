

import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import Views from '@/Views/Views.vue';
import { routes } from '@/routes.js';
import { nextTick } from 'vue';

describe('Views.vue routing', () => {
  it('renders routed component for /', async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ routes });
    router.push('/');
    await nextTick();
    const wrapper = mount(Views, { localVue, router });
    await nextTick();
    expect(wrapper.find('.portfolio').exists()).toBe(true);
  });

  it('renders routed component for /cv', async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ routes });
    router.push('/cv');
    await nextTick();
    const wrapper = mount(Views, { localVue, router });
    await nextTick();
    expect(wrapper.find('.cv__container').exists()).toBe(true);
  });
});

describe('Router meta title functionality', () => {
  it('sets document title from route meta on navigation to /', async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ routes });
    
    // Set up afterEach hook like in main.js
    router.afterEach((to) => {
      if (to.meta && to.meta.title) {
        document.title = to.meta.title;
      } else {
        document.title = 'Adrien Dubois Ahlqvist';
      }
    });
    
    await router.push('/');
    await nextTick();
    expect(document.title).toBe('Portfolio - Adrien Dubois Ahlqvist');
  });

  it('sets document title from route meta on navigation to /cv', async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ routes });
    
    // Set up afterEach hook like in main.js
    router.afterEach((to) => {
      if (to.meta && to.meta.title) {
        document.title = to.meta.title;
      } else {
        document.title = 'Adrien Dubois Ahlqvist';
      }
    });
    
    await router.push('/cv');
    await nextTick();
    expect(document.title).toBe('CV - Adrien Dubois Ahlqvist');
  });

  it('sets document title from route meta on navigation to /technicalFile', async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ routes });
    
    // Set up afterEach hook like in main.js
    router.afterEach((to) => {
      if (to.meta && to.meta.title) {
        document.title = to.meta.title;
      } else {
        document.title = 'Adrien Dubois Ahlqvist';
      }
    });
    
    await router.push('/technicalFile');
    await nextTick();
    expect(document.title).toBe('Technical File - Adrien Dubois Ahlqvist');
  });

  it('sets default document title when route has no meta title', async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ 
      routes: [
        { path: '/no-title', component: { template: '<div>No Title</div>' } }
      ]
    });
    
    // Set up afterEach hook like in main.js
    router.afterEach((to) => {
      if (to.meta && to.meta.title) {
        document.title = to.meta.title;
      } else {
        document.title = 'Adrien Dubois Ahlqvist';
      }
    });
    
    await router.push('/no-title');
    await nextTick();
    expect(document.title).toBe('Adrien Dubois Ahlqvist');
  });
});
