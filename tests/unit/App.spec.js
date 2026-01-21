import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import { routes } from '@/routes.js';

describe('App.vue rendering', () => {
  it('renders main app and does not fail', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter({ routes });
    const wrapper = shallowMount(App, { localVue, router });
    expect(wrapper.exists()).toBe(true);
    // Should contain the ViewsSection component
    expect(wrapper.findComponent({ name: 'ViewsSection' }).exists()).toBe(true);
  });
});
