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
  theme: {
    extend: {
      backgroundImage: {
        'home-carousel-searching': "url('assets/images/home-carousel-searching.png')",
        'home-carousel-achievement': "url('assets/images/home-carousel-achievement.svg')",
        'home-carousel-improving': "url('assets/images/home-carousel-improving.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
