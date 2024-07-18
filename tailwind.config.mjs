/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: {
					300: 'rgb(var(--color-accent-300) / <alpha-value>)',
					DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
					700: 'rgb(var(--color-accent-700) / <alpha-value>)',
				}
			}
		},
	},
	plugins: [],
}
