/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Roboto", "Arial", "Helvetica", "sans-serif"]
		},
		extend: {
			fontFamily: {
				heading: ["Poppins", "Arial", "Helvetica", "sans-serif"]
			},
			padding: {
				15: "60px"
			},
			colors: {
				primaryBlueLight: {
					50: "#f0fafb",
					100: "#daf0f3",
					200: "#a4d8e1",
					300: "#89cbd7",
					400: "#51abbf",
					500: "#358fa5",
					600: "#2f758b",
					700: "#2c6072",
					800: "#2b505f",
					900: "#284451",
					950: "#162c36"
				},
				primaryRed: {
					50: "#fff2f1",
					100: "#ffe4e1",
					200: "#ffccc7",
					300: "#ffa8a0",
					400: "#ff6f61",
					500: "#f84c3b",
					600: "#e52f1d",
					700: "#c12314",
					800: "#a02014",
					900: "#842218",
					950: "#480d07"
				},
				primaryBlueDark: {
					50: "#f5f7fa",
					100: "#eaedf4",
					200: "#cfd8e8",
					300: "#a5b9d4",
					400: "#7594bb",
					500: "#5376a4",
					600: "#405d89",
					700: "#354b6f",
					800: "#2f415d",
					900: "#2a374d",
					950: "#1d2534"
				},
				body: {
					textLight: "#7B7B7B",
					textDark: "#D8D8D8",
					bg: "#1A1E26"
				}
			}
		}
	},
	plugins: []
};
