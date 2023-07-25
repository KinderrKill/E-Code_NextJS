/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'monospace', 'sans-serif'],
        primary: ['Nunito', 'monospace', 'sans-serif'],
        secondary: ['Poppins', 'monospace', 'sans-serif'],
        painted: ['Finger Paint', 'monospace', 'sans-serif'],
      },
      colors: {
        primary: '#1b1e3d',
        secondary: '#171a34',
        third: '#282b5a',
        ecRed: '#cc3b45',
      },
      screens: {
        uw: '1921px',
      },
    },
  },

  plugins: [],
};
