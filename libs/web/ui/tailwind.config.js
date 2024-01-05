const { join } = require('path');
const sharedTailwindConfig = require('../../web/tailwind-preset/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
  ],
  // plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
