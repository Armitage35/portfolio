import { shallowMount } from '@vue/test-utils';
import Modal from '@/components/Modal/Modal.vue';

describe('Modal.vue', () => {
	let wrapper;
	const mockContent = {
		name: 'Test Job',
		place: 'Test Company',
		duration: '2020-2021',
		description: ['Great opportunity'],
		cover: 'test-cover.jpg',
		link: 'https://example.com'
	};

	beforeEach(() => {
		wrapper = shallowMount(Modal, {
			propsData: {
				content: mockContent
			}
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('renders the component', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('renders modal with correct structure', () => {
		const modal = wrapper.find('.modal');
		expect(modal.exists()).toBe(true);
	});

	it('displays modal title', () => {
		const title = wrapper.find('.modal__title h1');
		expect(title.text()).toBe('Test Job');
	});

	it('displays modal date', () => {
		const date = wrapper.find('.modal__date');
		expect(date.text()).toBe('2020-2021');
	});

	it('applies modal class', () => {
		const modal = wrapper.find('.modal');
		expect(modal.classes()).toContain('modal');
	});
});
