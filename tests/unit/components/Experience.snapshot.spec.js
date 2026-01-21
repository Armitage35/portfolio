import { shallowMount } from '@vue/test-utils';
import Experience from '@/components/Experience/Experience.vue';

describe('Experience.vue Snapshots', () => {
	const mockExperience = {
		name: 'Senior Product Manager',
		place: 'Hivestack - Perion',
		country: 'Montreal',
		duration: '2021-Today',
		clickable: true
	};

	it('renders experience card snapshot', () => {
		const wrapper = shallowMount(Experience, {
			propsData: {
				experience: mockExperience
			}
		});
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('renders experience card without link snapshot', () => {
		const nonClickableExperience = { ...mockExperience, clickable: false };
		const wrapper = shallowMount(Experience, {
			propsData: {
				experience: nonClickableExperience
			}
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
