

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
