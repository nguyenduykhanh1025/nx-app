const { rotate } = require('./utilities');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0a082d',
        secondary: '#2e3856',
        disabled: '#586380',
        active: '#ffffff',
        success: '#18AE79',
        error: '#D05700',
        picked: '#ffcd20',
        gray: '#2a2b48',
        button: {
          primary: {
            active: '#4255ff',
            hover: '#423ed8',
          },
          secondary: {
            active: '#2e3856',
            hover: '#1a1d28',
          },
          transparent: {
            hover: '#282e3e',
          },
        },
        card: {
          primary: {
            active: '#2e3856',
            hover: '#2e3856',
          },
        },
        'flash-card': {
          primary: {
            active: '#2e3856',
            hover: '#2e3856',
          },
        },
        'text-input': {
          primary: {
            active: '#4255ff',
            hover: '#423ed8',
          },
        },
        tooltip: {
          primary: '#58637f',
        },
        menu: {
          primary: '#1a1c28',
          title: '#d4d8e3',
        }
      },
    },
  },
  plugins: [rotate],
};
