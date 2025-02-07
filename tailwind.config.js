/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from 'fluid-tailwind'

export default {
	darkMode: ["class"],
	content: {
		files: [
			"./index.html",
			"./src/*.{js,ts,jsx,tsx}",
			"./src/**/*.{js,ts,jsx,tsx}",
		],
		extract,
	},
	theme: {
		screens,
		fontSize,
		extend: {
			screens: {
				"mobile": "23.5rem",
				"desktop": "90rem"
			},
			fontFamily: {
				"NanumBarunGothic": ["NanumBarunGothic", "sans-serif"],
				"Azonix": ["Azonix", "sans-serif"],
			},
			colors: {
				"primary": "#202335",
				"red": "#D72127"
			},
			spacing: {
				"container": "90rem"
			}
		},
		/** @type {import('fluid-tailwind').FluidThemeConfig} */
		fluid: ({ theme }) => ({
			defaultScreens: [theme('screens.mobile'), theme('screens.desktop')]
		})
	},
	plugins: [
		fluid({
			checkSC144: false // default: true
		}),
		require("tailwindcss-animate")
	],
}