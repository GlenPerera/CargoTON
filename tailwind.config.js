/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Add your paths here
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
        slideInRight: "slideInRight 1s ease-out",
      },
    },
  },
  plugins: [],
};
