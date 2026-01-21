import { shallowMount } from '@vue/test-utils';
import Experience from '@/components/Experience/Experience.vue';
import Modal from '@/components/Modal/Modal.vue';
import Project from '@/components/Project/Project.vue';
import Footer from '@/components/Footer/Footer.vue';

describe('Visual Layout Tests', () => {
	describe('Experience Component Layout', () => {
		const mockExperience = {
			name: 'Product Manager',
			place: 'Company',
			country: 'Country',
			duration: '2021-Now',
			clickable: true
		};

		it('has proper flex layout structure', () => {
			const wrapper = shallowMount(Experience, {
				propsData: { experience: mockExperience }
			});
			const bottom = wrapper.find('.experience__bottom');
			expect(bottom.exists()).toBe(true);
			expect(bottom.classes()).toContain('experience__bottom');
		});

		it('maintains proper spacing and structure', () => {
			const wrapper = shallowMount(Experience, {
				propsData: { experience: mockExperience }
			});
			expect(wrapper.find('.experience__title').exists()).toBe(true);
			expect(wrapper.find('.experience__place').exists()).toBe(true);
			expect(wrapper.find('.experience__duration').exists()).toBe(true);
		});
	});

	describe('Modal Component Layout', () => {
		const mockContent = {
			name: 'Project Name',
			place: 'Company',
			duration: '2021',
			description: ['Description'],
			cover: 'cover.jpg',
			link: 'https://example.com'
		};

		it('has proper modal structure', () => {
			const wrapper = shallowMount(Modal, {
				propsData: { content: mockContent }
			});
			expect(wrapper.find('.modal__mask').exists()).toBe(true);
			expect(wrapper.find('.modal').exists()).toBe(true);
			expect(wrapper.find('.modal__header').exists()).toBe(true);
			expect(wrapper.find('.modal__body').exists()).toBe(true);
		});

		it('displays all modal sections', () => {
			const wrapper = shallowMount(Modal, {
				propsData: { content: mockContent }
			});
			expect(wrapper.find('.modal__title').exists()).toBe(true);
			expect(wrapper.find('.modal__date').exists()).toBe(true);
			expect(wrapper.find('.modal__cover').exists()).toBe(true);
			expect(wrapper.find('.modal__text').exists()).toBe(true);
		});
	});

	describe('Project Component Layout', () => {
		const mockProject = {
			name: 'Project',
			description: ['Desc'],
			cover: 'cover',
			link: 'https://example.com'
		};

		it('renders project with proper classes', () => {
			const wrapper = shallowMount(Project, {
				propsData: { project: mockProject }
			});
			expect(wrapper.classes()).toContain('project');
		});
	});

	describe('Footer Component Layout', () => {
		it('maintains footer structure', () => {
			const wrapper = shallowMount(Footer);
			expect(wrapper.find('.footer').exists()).toBe(true);
			expect(wrapper.find('.footer__container').exists()).toBe(true);
		});
	});
});
