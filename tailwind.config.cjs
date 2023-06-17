const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				helvetica: ["helvetica", "sans-serif"],
				ppEditorialNew: ["ppEditorialNew", "serif"],
				neueHaasDisplayRoman: ["neueHaasDisplayRoman", "sans-serif"],
				ppNeueMontrealBold: ["ppNeueMontrealBold", "sans-serif"],
				ppNeueMontrealMedium: ["ppNeueMontrealMedium", "sans-serif"],
				EditorialNewLight: ["EditorialNewLight", "sans-serif"],
				AnandaBlackRegularCursive: ["AnandaBlackRegularCursive"],
				PlayfairDisplayItalic: ["PlayfairDisplayItalic"],
				MelodramaBold: ["MelodramaBold"],
				MelodramaMedium: ["MelodramaMedium"],
				MelodramaRegular: ["MelodramaRegular"],
				MelodramaSemibold: ["MelodramaSemibold"],
				MelodramaLight: ["MelodramaLight"],
				MelodramaVariable: ["MelodramaVariable"],
				BritneyBold: ["BritneyBold"],
				BlackOpsOne: ["Black Ops One", "sans-serif"],
				KumarOne: ["Kumar One", "sans-serif"],
			},
			gridTemplateColumns: {
				15: "repeat(15, minmax(0, 1fr))",
			},
		},
		screens: {
			"w-1670": { max: "1670px" },
			"w-1500": { max: "1500px" },
			"w-1200": { max: "1200px" },
			"w-1050": { max: "1050px" },
			"w-800": { max: "800px" },
			"w-600": { max: "600px" },
			"w-500": { max: "500px" },
			"w-470": { max: "470px" },
			"w-380": { max: "380px" },
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			mdlg: { max: "950px" },

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
	},
	plugins: [],
};
