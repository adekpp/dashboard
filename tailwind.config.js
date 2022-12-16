/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["SF Pro Display"],
    },
    extend: {},
  },
  plugins: [
    require("@headlessui/tailwindcss")({ prefix: "ui" }),
  ],
};
