const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray-1": "#222222",
        "custom-gray-2": "#444444",
        "custom-gray-3": "#999999",
        "custom-gray-4": "#F5F5F5",
        "custom-green": "#49E08C",
        "custom-blue": "#30A8FF",
      },
      backgroundImage: {
        "background-image": "url('/background2.avif')",
      },
    },
  },
  plugins: [],
});
