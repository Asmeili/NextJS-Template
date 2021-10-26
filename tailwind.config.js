/**
 * @file tailwind.config.js
 * @description Configuration for tailwindcss
 */


module.exports = {
	mode: "JIT",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./modules/**/*.{js,ts,jsx,tsx}"
	],
    darkMode: false,
  	theme: {
    	extend: {
			colors: {
				purple: "#6E1E6E"
			}
		}
  	},
  	variants: {
    	extend: {}
  	},
  	plugins: []
}