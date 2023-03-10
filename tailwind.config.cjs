/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,ts,jsx,js}"],
	theme: {
		extend: {
			colors: {
				// Primary

				Soft_red: "hsl(10, 79%, 65%)",
				Cyan: "hsl(186, 34%, 60%)",

				// Neutral

				Dark_brown: "hsl(25, 47%, 15%)",
				Medium_brown: "hsl(28, 10%, 53%)",
				Cream: "hsl(27, 66%, 92%)",
				Very_pale_orange: "hsl(33, 100%, 98%)",
			},
			fontFamily: {
				sans: ["DM Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
