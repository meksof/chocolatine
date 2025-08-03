/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'italiana': ['Italiana', 'serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'brown-primary': '#8C540A',
        'brown-light': '#F6EBD9',
        'cream-bg': '#FBF8F3',
        'blue-action': '#3F51B5',
        'red-delete': '#F54F4F',
      }
    },
  },
  plugins: [],
}
