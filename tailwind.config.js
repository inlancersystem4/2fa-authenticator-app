/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--work-sans)",
        serif: "var(--montserrat)",
      },
      colors: {
        lightBackground: "hsl(var(--light-background) / <alpha-value>)",
        mediumGray: "hsl(var(--medium-gray) / <alpha-value>)",
        lightGray: "hsl(var(--light-gray) / <alpha-value>)",
        darkGray: "hsl(var(--dark-gray) / <alpha-value>)",
        charcoal: "hsl(var(--charcoal) / <alpha-value>)",
        grayMedium: "hsl(var(--gray-medium) / <alpha-value>)",
        errorRed: "hsl(var(--error-red) / <alpha-value>)",
        softPink: "hsl(var(--soft-pink) / <alpha-value>)",
        successGreen: "hsl(var(--success-green) / <alpha-value>)",
        lightGreen: "hsl(var(--light-green) / <alpha-value>)",
        neutralGray: "hsl(var(--neutral-gray) / <alpha-value>)",
        blueSapphire: "hsl(var(--blue-sapphire) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
