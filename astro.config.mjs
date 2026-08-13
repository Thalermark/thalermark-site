// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://thalermark.com',
	integrations: [
		starlight({
			title: 'Thalermark Docs',
			description:
				'How to use Thalermark — the open source, AI-first accounting tool for freelancers and trades people.',
			favicon: '/favicon.svg',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Thalermark/thalermark',
				},
			],
			customCss: ['./src/styles/custom.css'],
			plugins: [starlightLlmsTxt()],
			sidebar: [
				{ label: 'Start here', items: [{ autogenerate: { directory: 'docs/start' } }] },
				{ label: 'Run it yourself', items: [{ autogenerate: { directory: 'docs/self-host' } }] },
			],
		}),
	],
});
