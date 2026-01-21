import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer/Footer.vue';

describe('Footer.vue', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Footer);
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('renders the component', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('renders footer with correct class', () => {
		const footer = wrapper.find('.footer');
		expect(footer.exists()).toBe(true);
	});

	it('contains footer structure', () => {
		const footerContainer = wrapper.find('.footer__container');
		expect(footerContainer.exists()).toBe(true);
	});
});
