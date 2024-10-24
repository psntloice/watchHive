const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(date-picker|image|input|table|button|ripple|spinner|calendar|date-input|popover|checkbox|spacer).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      label: [
        "block",
        "absolute",
        "z-10",
        "origin-top-left",
        "rtl:origin-top-right",
        "subpixel-antialiased",
        "text-big",
        "text-foreground-100",
        "pointer-events-none",
      ],
    },
    
    colors: {
      primary : {
        background: "#FAA0BF",
      },
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'bgwhite': '#eff6ff',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
  },
  plugins: [nextui({
    addCommonColors: true,
  })],
};
