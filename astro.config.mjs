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
				'How to use Thalermark, the open source, AI-first accounting tool for freelancers and trades people.',
			favicon: '/favicon.svg',
			head: [
				{
					// Same cookieless Matomo snippet as the landing page, same site id.
					tag: 'script',
					content: `
  var _paq = window._paq = window._paq || [];
  _paq.push(["disableCookies"]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytics.thalermark.com/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();`,
				},
			],
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
				{ label: 'Everyday use', items: [{ autogenerate: { directory: 'docs/use' } }] },
				{ label: 'Settings', items: [{ autogenerate: { directory: 'docs/settings' } }] },
				{ label: 'Run it yourself', items: [{ autogenerate: { directory: 'docs/self-host' } }] },
				{ label: 'Trust', items: [{ autogenerate: { directory: 'docs/trust' } }] },
			],
		}),
	],
});
