/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"dark-vanilla": "#DEC7A6",
				"black": "#121212",
				"cultured": "#F8F5EF"
			},
			screens: {
      			'xs': "480px",
      			'sm': "640px",
      			"md": "768px",
      			"lg": "1024px",
      			"xl": "1280px"
    		}
		},
	},
	plugins: [],
}
