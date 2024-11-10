daisyThemes = require("daisyui/src/theming/themes");
tailwindTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["rubik", ...tailwindTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#023A15",
					secondary: "#ACE6BC",
					accent: "#FFFFFF",
					"base-100": "#023A15" 
				},
				dark: {
					...daisyThemes["dark"],
					primary: "#A5B4FC",
					secondary: "#7C3AED",
					accent: "#C084FC",
				},
			},
		],
	},
};
