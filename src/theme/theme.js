export const light = {
  name: "light",
  palette: {
    colorPrimary: "#8849F8",
    colorSecondary: "#F385DF",
    colorComplement: "#49CAF7",
    colorAccent: "#FFFFFF",
    colorBackground: "#E6F0F6",
    colorText: "#4A456F",
    colorGradient:
      "linear-gradient(89.99deg, #F385DF 0%, rgba(136, 73, 248, 0.63) 49.85%, rgba(73, 202, 247, 0.6) 93.83%)",
    colorGlass:
      "radial-gradient(100.45% 852.22% at 2.41% -4.95%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 100%)",
  },
  button: {
    primary: {
      background:
        "linear-gradient(89.99deg, #F385DF 0%, rgba(136, 73, 248, 0.63) 49.85%, rgba(73, 202, 247, 0.6) 93.83%)",
      text: "#FFFFFF",
      border: "none",
      borderRadius: "50px",
      shadow: "#997d97",
      state: {
        hover: {
          background: "#e6bbe2",
        },
        focus: {
          border: "#8849F8",
        },
      },
    },
    secondary: {
      background:
        "radial-gradient(162.1% 294.47% at -33.87% 30.43%, rgba(255, 255, 255, 0.56) 0%, rgba(255, 255, 255, 0.07) 100%)",
      text: "#4A456F",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "50px",
      shadow: '#284f99"',
      state: {
        hover: {
          background:
            "linear-gradient(89.99deg, #F385DF 0%, rgba(136, 73, 248, 0.63) 49.85%, rgba(73, 202, 247, 0.6) 93.83%)",
        },
        focus: {
          border: "1px solid rgba(136, 73, 248, 0.1)",
        },
      },
    },
    theme: {
      background: '#f0f0f0"',
      text: "#110038",
    },
  },
  mediaQueries: {
    mediaLg: "1201px",
    mediaMd: "700px",
    mediaSm: "600px",
  },
};

export const dark = {
  name: "dark",
  palette: {
    colorPrimary: "#A475F9",
    colorSecondary: "#F6A2E7",
    colorComplement: "#72D6F9",
    colorAccent: "#161860",
    colorBackground: "#04041A",
    colorText: "#E6F0F6",
    colorGradient:
      "linear-gradient(89.99deg, #F6A2E6 0%, #A475F9 44.47%, #72D6F9 93.83%)",
    colorGlass:
      "radial-gradient(100.45% 852.22% at 2.41% -4.95%, rgba(22, 24, 96, 0.36) 0%, rgba(22, 24, 96, 0.06) 100%)",
  },
  button: {
    primary: {
      background:
        "linear-gradient(89.99deg, #F6A2E6 0%, #A475F9 44.47%, #72D6F9 93.83%)",
      text: "#E6F0F6",
      border: "#none",
      shadow: "#a72cbb",
      state: {
        hover: {
          background: "#ce36db",
        },
        focus: {
          border: "#A475F9",
        },
      },
    },
    secondary: {
      background:
        "radial-gradient(122.31% 206.7% at -5.38% 36%, rgba(22, 24, 96, 0.3) 0%, rgba(22, 24, 96, 0.05) 100%)",
      text: "#E6F0F6",
      border: "1px solid rgba(22, 24, 96, 0.3)",
      borderRadius: "50px",
      shadow: "#2124b3",
      state: {
        hover: {
          // background:
          //   "radial-gradient(120.56% 195.36% at 0% 10%, rgba(164, 117, 249, 0.5) 0%, rgba(22, 24, 96, 0.05) 100%)",
          background:
            "linear-gradient(89.99deg, #F6A2E6 0%, #A475F9 44.47%, #72D6F9 93.83%)",
        },
        focus: {
          border: "1px solid rgba(164, 117, 249, 1)",
        },
      },
    },
    theme: {
      background: "#cccccc",
      text: "#ffffff",
      border: "#808080",
      shadow: "#b4b4b4",
      active: {
        background: "#2e32fb",
        border: "rgba(51, 53, 143, 0.2)",
        shadow: "#e6dce4",
      },
    },
  },
  mediaQueries: {
    mediaLg: "1200px",
    mediaMd: "700px",
    mediaSm: "600px",
  },
};
