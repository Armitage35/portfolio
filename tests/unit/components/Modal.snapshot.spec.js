import { shallowMount } from '@vue/test-utils';
import Modal from '@/components/Modal/Modal.vue';

describe('Modal.vue Snapshots', () => {
	const mockContent = {
		name: 'Hivestack SSP',
		place: 'Hivestack - Perion, Montreal',
		duration: '2021-Today',
		description: ['Building an SSP for publishers to maximize revenue'],
		cover: 'hivestack.jpg',
		link: 'https://hivestack.com'
	};

	it('renders modal snapshot', () => {
		const wrapper = shallowMount(Modal, {
			propsData: {
				content: mockContent
			}
		});
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('renders modal without link snapshot', () => {
		const contentNoLink = { ...mockContent, link: null };
		const wrapper = shallowMount(Modal, {
			propsData: {
				content: contentNoLink
			}
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
