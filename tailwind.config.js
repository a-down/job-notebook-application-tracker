/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      fontFamily: {
        'display': 'var(--kadwa)',
        'body': 'var(--lexend)'
      },
      
      colors: {
        'brand-primary': '#9DD4C7',
        'gray-1': '#F9F9F9',
        'gray-2': '#F1F1F1',
        'gray-3': '#EEEEEE',
        'gray-4': '#EEEEEE',
        'gray-5': '#E4E4E4',
        'gray-6': '#D1D1D1',
        'gray-7': '#8C8C8C',
        'gray-8': '#717171',
        'gray-9': '#4D4D4D',

        'alert-red': '#FF3F3F'
      },

      dropShadow: {
        'brand' : '0 4px 4px rgba(0, 0, 0, 0.25)'
      },
    }
  },
  plugins: [],
}
