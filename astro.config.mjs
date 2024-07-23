import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ADS-DEV Knowledge Base',
			social: {
				github: 'https://github.com/ebizads',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Our Team', slug: 'introduction/team' },
						{ label: 'Team Directory', slug: 'introduction/directory' },
						{ label: 'Projects', slug: 'introduction/projects' },
					],
				},
				{
					label: 'Initial Setup',
					items: [
						{ label: 'Development Tools', slug: 'setup/tools' },
						{ label: 'Tech Stack', slug: 'setup/tech' },
						{ label: 'User Accounts', slug: 'setup/accounts' },
					],
				},
								{
					label: 'Initial Setup',
					items: [
						{ label: 'Development Tools', slug: 'setup/tools' },
						{ label: 'Tech Stack', slug: 'setup/tech' },
						{ label: 'User Accounts', slug: 'setup/accounts' },
					],
				}
				
			],
		}),
	],
});
