export default {
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1120px",
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary_black: "#000000",
        primary_blue: "#377dff",
        primary_green: "#38cb89",
        primary_orange: "#ffab00",
        primary_red: "#ff5630",
        neutral_07: "#141718",
        neutral_06: "#232627",
        neutral_05: "#343839",
        neutral_04: "#6c7275",
        neutral_03: "#e8ecef",
        neutral_02: "#f3f5f7",
        neutral_01: "#fefefe",
      },
      backgroundImage: {
        "login-pattern": "url('/Paste image.png')",
        "sale-image": "url('/slider_image_3.png')",
        "pre-footer": "url('/pre_footer.png')",
        "shop-header": "url('/shop_header.png')",
      },
    },
    fontSize: {
      hero_size: "96px",
      h1_size: "80px",
      h2_size: "72px",
      h3_size: "54px",
      h4_size: "40px",
      h5_size: "34px",
      h6_size: "28px",
      h7_size: "20px",
      body1_size: "20px",
      body2_size: "16px",
      caption1_size: "14px",
      caption2_size: "12px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtitlies = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtitlies);
    },
  ],
};
