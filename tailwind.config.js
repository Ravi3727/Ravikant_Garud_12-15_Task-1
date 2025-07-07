/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'], // Add Roboto as a custom font family
      },
      colors: {
        customGray: 'rgba(181, 201, 227, 1)',
        customBlue: 'rgba(23, 43, 77, 1)',
        lightBlue: 'rgba(231, 248, 255, 1)',
        lighttwo: 'rgba(214, 244, 255, 1)',
        chaptertext: 'rgba(96, 138, 210, 1)',
        progressText: 'rgba(23, 56, 77, 1)',
        completeBorder: 'rgba(153, 228, 255, 1)',
        progressbar: 'rgba(23, 43, 77, 0.851)',
        borderColor: 'linear-gradient(90deg, rgba(23, 43, 77, 0) 0%, #172B4D 49.54%, rgba(5, 68, 94, 0) 100%)',
      }
    },
  },
  plugins: [],
}

