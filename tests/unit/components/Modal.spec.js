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

	it('closes when ESC key is pressed', async () => {
		const toggleModal = jest.fn();
		wrapper.vm.$on('toggleModal', toggleModal);
		// Simulate ESC keydown event
		const event = new window.KeyboardEvent('keydown', { key: 'Escape' });
		window.dispatchEvent(event);
		// Wait for event loop
		await new Promise(resolve => setTimeout(resolve, 10));
		expect(toggleModal).toHaveBeenCalled();
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
