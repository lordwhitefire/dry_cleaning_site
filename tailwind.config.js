/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      customColor: '#28A745', // Add your custom color here
      customColor2: '#990404',
      customColor3: '#292f36',
      transparent: 'transparent',
      current: 'currentColor',
      'ablack': '#000000',//I added A to all your colours because some of the colour names you are using is same with tailwind's predefined colour names.
      'adark': '#363636',//Incase you want to add any additional colour, add an A prefix to your custom name to prevent it from clashing with Tailwind's format
      'aneutral': '#666666',
      'awhite': '#ffffff',
      'apurple': '#6261FF',
      'amidnight': '#0100bb',
      'alight': '#ECF0F5',
      'afaded': '#3938FF',
      'amixed': '#1126920D',
      'agrey': '#B3B2FF66',
      'abermuda': '#78dcca',
      'agreen': '#86EFAC',
      'acard': '#9333EA',
      'adarkgreen': '#28A745',
      'adarkgrey': '#646468',
    },
  },
  plugins: [require("@tailwindcss/forms"),  addDynamicIconSelectors(),],
}

// addDynamicIconSelectors(), this plugin is for using iconify icons in tailwind Please don't delete incase is causing error run npm install before running npm run dev 