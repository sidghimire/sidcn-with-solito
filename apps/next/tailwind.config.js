const { theme } = require('app/design/tailwind/theme')
const path = require('path');
const modulePath = require.resolve('sidcn/package.json')
const packageDirectory = path.dirname(modulePath)
console.log(packageDirectory)
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
    `${packageDirectory}/src/**/*.{js,jsx,ts,tsx}`,
  ],
  plugins: [require('nativewind/tailwind/css')],
  important: 'html',
  theme: {
    ...theme,
  },
}
