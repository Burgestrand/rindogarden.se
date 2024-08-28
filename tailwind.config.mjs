const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
		},
		extend: {
			keyframes: {
				'grid-auto-height': {
					'0%': { 'grid-template-rows': '0fr' },
					'100%': { 'grid-template-rows': '1fr' }
				}
			},
			animation: {
				'grid-auto-height': 'grid-auto-height 300ms ease-in-out forwards',
			},
			fontFamily: {
				'days-one': ['Days One', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'shark': {
					'50': '#f6f7f7',
					'100': '#e2e5e3',
					'200': '#c5cac7',
					'300': '#a0a8a5',
					'400': '#7c8581',
					'500': '#616b67',
					'600': '#4d5452',
					'700': '#3f4643',
					'800': '#353a37',
					'900': '#2f3231',
					'950': '#1d201f',
				},
				'puerto-rico': {
					'50': '#f2fbf8',
					'100': '#d5f2e9',
					'200': '#aae5d4',
					'300': '#77d1ba',
					'400': '#62bfaa',
					'500': '#329a85',
					'600': '#257c6b',
					'700': '#226357',
					'800': '#1f5048',
					'900': '#1e433d',
					'950': '#0c2724',
				},
				'allports': {
					'50': '#eff9fc',
					'100': '#d7eff6',
					'200': '#b4dfed',
					'300': '#81c7df',
					'400': '#46a6ca',
					'500': '#2a89b0',
					'600': '#2978a0', // X
					'700': '#255b79',
					'800': '#264c64',
					'900': '#244155',
					'950': '#132939',
				},
				'persian-rose': {
					'50': '#fef1fa',
					'100': '#fde6f6',
					'200': '#feccef',
					'300': '#fea3e1',
					'400': '#fc6acc',
					'500': '#f62dae', // X
					'600': '#e71b94',
					'700': '#c90d77',
					'800': '#a60e61',
					'900': '#8a1154',
					'950': '#55022f',
				},
				'mandy': {
					'50': '#fff1f3',
					'100': '#fee5e8',
					'200': '#fccfd6',
					'300': '#faa7b4',
					'400': '#f7758d',
					'500': '#ee4266', // X
					'600': '#db2352',
					'700': '#b91745',
					'800': '#9b1640',
					'900': '#84173c',
					'950': '#4a071d',
				},
				'lightning-yellow': {
					'50': '#fffeeb',
					'100': '#fffcc6',
					'200': '#fff888',
					'300': '#ffee49',
					'400': '#ffe020',
					'500': '#f2bb05', // X
					'600': '#dd9602',
					'700': '#b86c05',
					'800': '#95520b',
					'900': '#7a430d',
					'950': '#462402',
				},
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
