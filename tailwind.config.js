/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./views/input.css -o ./public/output.css --watch
    