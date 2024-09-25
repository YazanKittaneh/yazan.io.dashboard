module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  files: {
    associations: {
      "*.css": "tailwindcss"
    }
  },
  editor: {
    quickSuggestions: {
      strings: "on"
    }
  }
}