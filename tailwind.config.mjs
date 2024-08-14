const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'bangers': ['Bangers', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				'christalle': {
					'50': '#f5f2ff',
					'100': '#eee8ff',
					'200': '#ded3ff',
					'300': '#c7b0ff',
					'400': '#ac84ff',
					'500': '#9452ff',
					'600': '#882ff8',
					'700': '#791de4',
					'800': '#6617c0',
					'900': '#54159d',
					DEFAULT: '#310a65', // A
				},
				'golden-tainoi': {
					'50': '#fff9eb',
					'100': '#ffeec6',
					'200': '#ffdb88',
					DEFAULT: '#ffc759', // B
					'400': '#ffaa20',
					'500': '#f98607',
					'600': '#dd6002',
					'700': '#b74106',
					'800': '#94310c',
					'900': '#7a2a0d',
					'950': '#461302',
				},
				'tickle-me-pink': {
					'50': '#fff1f3',
					'100': '#ffe3e8',
					'200': '#ffccd7',
					'300': '#ffa1b7',
					DEFAULT: '#ff7b9c', // C
					'500': '#f93a6f',
					'600': '#e7175b',
					'700': '#c30d4c',
					'800': '#a30e47',
					'900': '#8b1043',
					'950': '#4e0320',
				},
				'bright-turquoise': {
					'50': '#f0fdfa',
					'100': '#cbfcf3',
					'200': '#97f8e8',
					DEFAULT: '#41ead4', // D
					'400': '#2ad7c7',
					'500': '#11bbae',
					'600': '#0a978e',
					'700': '#0d7873',
					'800': '#0f605c',
					'900': '#124f4d',
					'950': '#033030',
				},
				'picton-blue': {
					'50': '#eef9ff',
					'100': '#d9f1ff',
					'200': '#bce7ff',
					'300': '#8edaff',
					'400': '#59c3ff',
					DEFAULT: '#35a7ff', // E
					'600': '#1b87f5',
					'700': '#1470e1',
					'800': '#1759b6',
					'900': '#194d8f',
					'950': '#142f57',
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
