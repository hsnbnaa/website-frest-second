/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dela: ["Dela Gothic One", "sans-serif"],
      },
      backgroundImage: {
        "bg-Hero": "url('public/images/bg-hero.jpg')",
        "bg-alter": "url('public/images/bg-alternatif.png')",
        "bg-about": "url('public/images/bg-about.png')",
        variant: "url('public/images/bg-variant.png')",
        feedback: "url('public/images/bg-feedback.png')",
      },
    },
  },
  plugins: [],
};
