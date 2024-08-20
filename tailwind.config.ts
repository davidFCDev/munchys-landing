import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xxsmall: "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        xxlarge: "1920px",
      },
      fontFamily:{
        roboto: "Roboto, sans-serif",
        kabouter: ['Kabouter', 'sans-serif'],
        blackCoffee: ['BlackCoffee', 'sans-serif'],
        milkyCoffee: ['MilkyCoffee', 'sans-serif'],
      },
      colors:  {
        terciary: "#FFE398",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3596C9",
          secondary: "#FFA400",
          accent:"#1073B5",
          neutral: "#3d4451",
          "base-100": "white",

          "--rounded-box": "0rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.4rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "0.5rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
      },
    ],
  },
};
export default config;
