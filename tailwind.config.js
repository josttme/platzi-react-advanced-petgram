/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#040331'
			},
			animation: {
				'pulse-fast':
					'pulse 1000ms cubic-bezier(0.4, 0, 0.6, 1) infinite'
			}
		}
	},
	plugins: []
}
