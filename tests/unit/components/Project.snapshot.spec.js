import { shallowMount } from '@vue/test-utils';
import Project from '@/components/Project/Project.vue';

describe('Project.vue Snapshots', () => {
	const mockProject = {
		name: 'Hivestack SSP',
		duration: '2021-Today',
		description: ['Built SSP generating 168M USD per year'],
		cover: 'hivestack',
		link: 'https://hivestack.com'
	};

	it('renders project card snapshot', () => {
		const wrapper = shallowMount(Project, {
			propsData: {
				project: mockProject
			}
		});
		expect(wrapper.html()).toMatchSnapshot();
	});
});
