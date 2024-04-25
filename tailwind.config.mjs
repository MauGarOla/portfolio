/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				site: {
					50: '#fdf8f6', 
					100: '#E3FEF7', // light
					200: '#f6fcc7',
					300: '#77B0AA', // secondary
					400: '#d2bab0',
					500: '#1a636d', 
					600: '#135D66', // main
					700: '#0f4a52',
					800: '#003C43', // dark
					900: '#43302b',
				},
			},
		},
	},
	
	plugins: [],
}

