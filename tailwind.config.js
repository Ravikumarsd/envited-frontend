/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "primary-purple": "#8456EC",
        "primary-purple-dark": "#240D57",
        "primary-purple-light": "#501FC1",
        "pink-primary": "#E87BF8",
        "secondary-purple-1": "#CCB6FF",
        "secondary-purple-2": "#EDE5FF",
        "secondary-purple-3": "#F6F2FF",
        
      },
    },
  },
  plugins: [],
};
