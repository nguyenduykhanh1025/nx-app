const plugin = require('tailwindcss/plugin');

export const rotate = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})
