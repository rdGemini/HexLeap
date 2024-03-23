/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#292b32",
          "200": "#1d1d1f",
        },
        black: "#000",
        darkslategray: {
          "100": "#3b3e47",
          "200": "#333",
          "300": "#222d3a",
        },
        white: "#fff",
        gainsboro: "#dfdfdf",
        cornflowerblue: {
          "100": "#2c9cf0",
          "200": "#1282d6",
        },
        teal: "#006555",
        dodgerblue: "#738fff",
        whitesmoke: "#f7f7f8",
        dimgray: {
          "100": "#525965",
          "200": "#4f4f52",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "10xs": "3px",
      },
    },
    fontSize: {
      "smi-7": "12.7px",
      sm: "14px",
      mid: "17px",
      "31xl": "50px",
      "21xl": "40px",
      "11xl": "30px",
      "smi-8": "12.8px",
      xl: "20px",
      base: "16px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
