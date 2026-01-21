import { shallowMount } from '@vue/test-utils';
import Experience from '@/components/Experience/Experience.vue';

describe('Experience.vue', () => {
	let wrapper;
	const mockExperience = {
		name: 'Senior Product Manager',
		place: 'Hivestack - Perion',
		country: 'Montreal',
		duration: '2021-Today',
		clickable: true
	};

	beforeEach(() => {
		wrapper = shallowMount(Experience, {
			propsData: {
				experience: mockExperience
			}
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('renders the component', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('displays the experience title', () => {
		const title = wrapper.find('.experience__title');
		expect(title.text()).toBe('Senior Product Manager');
	});

	it('displays place and country', () => {
		const place = wrapper.find('.experience__place');
		expect(place.text()).toBe('Hivestack - Perion, Montreal');
	});

	it('displays duration', () => {
		const duration = wrapper.find('.experience__duration');
		expect(duration.text()).toBe('2021-Today');
	});

	it('shows icon when experience is clickable', () => {
		const icon = wrapper.find('i.fas');
		expect(icon.exists()).toBe(true);
	});

	it('hides icon when experience is not clickable', async () => {
		const nonClickableExperience = { ...mockExperience, clickable: false };
		await wrapper.setProps({ experience: nonClickableExperience });
		const icon = wrapper.find('i.fas');
		expect(icon.exists()).toBe(false);
	});

	it('emits seeJob event when clicked', () => {
		wrapper.find('.experience').trigger('click');
		expect(wrapper.emitted('seeJob')).toBeTruthy();
		expect(wrapper.emitted('seeJob')[0]).toEqual([mockExperience]);
	});

	it('applies cursor pointer style', () => {
		const experience = wrapper.find('.experience');
		expect(experience.classes()).toContain('experience');
	});
});
