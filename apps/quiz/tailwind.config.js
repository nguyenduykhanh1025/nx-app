const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const { colors } = require('./src/tailwind-config/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        primary: colors.primary
      },
      colors: {
        primary: colors.primary,
      },
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
