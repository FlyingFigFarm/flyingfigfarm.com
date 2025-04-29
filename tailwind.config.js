/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        print: {raw: 'print'},
        screen: {raw: 'screen'},
      },
    },
  },
  plugins: [],
};
