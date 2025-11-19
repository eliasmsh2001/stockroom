/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainText: 'rgb(2, 48, 71)',
        secondaryText: 'rgb(33, 158, 188)',
        mainBlue: 'rgb(0, 119, 182)',
        unique: 'rgb(255, 183, 3)',
        alert: '#f94144'
      }
    }
  },
  plugins: []
}
