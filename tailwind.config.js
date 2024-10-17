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
        "15": "60px"
      }
		}
	},
	plugins: []
};
