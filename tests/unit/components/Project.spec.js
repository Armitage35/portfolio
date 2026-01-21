import { shallowMount } from '@vue/test-utils';
import Project from '@/components/Project/Project.vue';

describe('Project.vue', () => {
	let wrapper;
	const mockProject = {
		name: 'Hivestack SSP',
		description: ['Building an SSP for publishers'],
		cover: 'hivestack',
		link: 'https://hivestack.com'
	};

	beforeEach(() => {
		wrapper = shallowMount(Project, {
			propsData: {
				project: mockProject
			}
		});
	});

	afterEach(() => {
		wrapper.destroy();
	});

	it('renders the component', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('receives project prop correctly', () => {
		expect(wrapper.props('project')).toEqual(mockProject);
	});

	it('applies project class', () => {
		expect(wrapper.classes()).toContain('project');
	});
});
