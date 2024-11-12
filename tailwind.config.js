daisyThemes = require("daisyui/src/theming/themes");
tailwindTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	darkMode: "class",
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
					primary: "#0C1E12",
					secondary: "#70B293",
					accent: "#ccfbf1",
				},
			},
		],
	},
};
