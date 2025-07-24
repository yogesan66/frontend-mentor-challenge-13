/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "hsl(180, 52%, 96%)",
          400: "hsl(180, 29%, 50%)",
          900: "hsl(180, 14%, 20%)",
        },
        gray: {
          400: "hsl(180, 8%, 52%)",
        },
      },
      fontFamily: {
        league: ["League Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
