import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer/Footer.vue';

describe('Footer.vue Snapshots', () => {
	it('renders footer snapshot', () => {
		const wrapper = shallowMount(Footer);
		expect(wrapper.html()).toMatchSnapshot();
	});
});
