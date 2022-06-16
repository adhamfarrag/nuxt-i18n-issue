module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
  theme: {
    extend: {
      colors: {
        light: {
          matterhorn: '#4d3e3e',
          barleyWhite: '#fff3cd',
          chardonnay: '#ffc38b',
          salmon: '#ff926b',
        },
        dark: {
          Melanzane: '#2c061f',
          outerSpace: '#374045',
          zombie: '#e1d89f',
          fireBush: '#E8A334',
        },
      },
      fontFamily: {
        dubai: ['Dubai', 'sans-serif'],
      },
    },
  },
  darkMode: false,
  plugins: [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
