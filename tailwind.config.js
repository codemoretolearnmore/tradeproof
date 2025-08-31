module.exports = {
  theme: {
    extend: {
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { r: '4' },
          '50%': { r: '6' },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
