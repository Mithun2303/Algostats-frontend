/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				primary: "#5241AB",
				awhite: "#F6F5FA",
				lightPrimary:"#B7B0E1",
			},
			dropShadow:{
				light:"8px 16px 10px rgba(0, 0, 0, 0.25)"
			},
			fontFamily:{
				special:["Jacques Francois Shadow"],
			}


		}
	},
}

