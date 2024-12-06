import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind  from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'TGSN',
			customCss: [
				'./src/tailwind.css',
			],
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			social: {
				github: 'https://github.com/withastro/starlight'
			},
			base: '/Kuraga/', // Git hub repo
		}),
		tailwind({
			// Отключите базовые стили:
			applyBaseStyles: false,
		})
	],
});
