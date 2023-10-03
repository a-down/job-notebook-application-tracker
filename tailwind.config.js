/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['12px', '12px'],
      sm: ['14px', '14px'],
      base: ['16px', '16px'],
      lg: ['18px', '18px'],
      xl: ['20px', '20px'],
    },

    extend: {
      fontFamily: {
        'display': 'var(--lexend-deca)',
        'body': 'var(--lexend)'
      },

      fontWeight: {
        normal: 300,
        regular: 400,
        medium: 500
      },

      fontSize: {
        'xxs': ['10px', '10px'],
        '2xl': ['24px', '24px'],
        '3xl': ['30px', '30px'],
        '4xl': ['36px', '36px'],
        '5xl': ['48px', '48px']
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
        'brand' : '0 4px 2px rgb(0, 0, 0, .25)'
      },
    }
  },
  plugins: [],
}
