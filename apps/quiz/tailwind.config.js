const { join } = require('path');
const sharedTailwindConfig = require('../../libs/web/tailwind-preset/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '../../libs/web/ui/src/**/!(*.stories|*.spec).{ts,html}'),
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       button: {
  //         primary: 'red',
  //       },
  //     },
  //   },
  // },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
