// @ts-check
const path = require('path');
const { theme } = require('app/design/tailwind/theme')
const modulePath = require.resolve('sidcn/package.json')
const packageDirectory = path.dirname(modulePath)

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './App.tsx',
    '../../packages/**/*.{js,jsx,ts,tsx}',
    `${packageDirectory}/src/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    ...theme,
  },
  plugins: [],
}
