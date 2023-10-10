import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Palette {
    squidInk: Palette["primary"];
    snow: Palette["primary"];
    summit: Palette["primary"];
    smile: Palette["primary"];
    summer: Palette["primary"];
    jungle: Palette["primary"];
    aurora: Palette["primary"];
    incandescence: Palette["primary"];
    jpcarts: Palette["primary"];
    wave: Palette["primary"];
    reef: Palette["primary"];
    rock: Palette["primary"];
    mist: Palette["primary"];
    iris: Palette["primary"];
    lagoon: Palette["primary"];
    nectar: Palette["primary"];
    coral: Palette["primary"];
    prime: Palette["primary"];
    fire: Palette["primary"];
    poseidon: Palette["primary"];
    cumulus: Palette["primary"];
    storm: Palette["primary"];
  }

  interface PaletteOptions {
    squidInk: PaletteOptions["primary"];
    snow: PaletteOptions["primary"];
    summit: PaletteOptions["primary"];
    smile: PaletteOptions["primary"];
    prime: PaletteOptions["primary"];
    summer: PaletteOptions["primary"];
    jungle: PaletteOptions["primary"];
    aurora: PaletteOptions["primary"];
    incandescence: PaletteOptions["primary"];
    wave: PaletteOptions["primary"];
    reef: PaletteOptions["primary"];
    jpcarts: PaletteOptions["primary"];
    rock: PaletteOptions["primary"];
    mist: PaletteOptions["primary"];
    iris: PaletteOptions["primary"];
    lagoon: PaletteOptions["primary"];
    nectar: PaletteOptions["primary"];
    coral: PaletteOptions["primary"];
    fire: PaletteOptions["primary"];
    poseidon: PaletteOptions["primary"];
    cumulus: PaletteOptions["primary"];
    storm: PaletteOptions["primary"];
  }

  interface PaletteColor {
    transp?: string;
  }

  interface SimplePaletteColorOptions {
    transp?: string;
  }

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    hd: true;
    fullhd: true;
    qhd: true;
    fk: true;
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Amazon Ember",
      "-apple-system",
      "system-ui",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#1a98ff",
    },
    secondary: {
      main: "#FFC400",
      dark: "#d4a300",
    },
    squidInk: {
      main: "#232F3E",
    },
    snow: {
      main: "#EAEDED",
    },
    summit: {
      main: "#D5DBDB",
    },
    cumulus: {
      main: "#AAB7B8",
    },
    storm: {
      main: "#6C7778",
    },
    smile: {
      main: "#FF9900",
      transp: "rgba(255, 153, 0, 0.8)",
    },
    prime: {
      main: "#00a8e1",
      transp: "rgba(0, 168, 225, 0.8)",
    },
    summer: {
      main: "#ffc40f",
      transp: "rgba(255, 196, 15, 0.8)",
    },
    jungle: {
      main: "#ade422",
      transp: "rgba(173, 228, 34, 0.8)",
    },
    aurora: {
      main: "#a90067",
      transp: "rgba(169, 0, 103, 0.8)",
    },
    incandescence: {
      main: "#ff6138",
      transp: "rgba(255, 97, 56, 0.8)",
    },
    wave: {
      main: "#008577",
      transp: "rgba(0, 133, 119, 0.8)",
    },
    reef: {
      main: "#FF4F8D",
      transp: "rgba(255, 79, 141, 0.8)",
    },
    jpcarts: {
      main: "#67b2c7",
      transp: "rgba(103, 178, 199, 0.8)",
    },
    rock: {
      main: "#CC0C39",
      transp: "rgba(204, 12, 57, 0.8)",
    },
    mist: {
      main: "#A8DFEE",
      transp: "rgba(168, 223, 238, 0.8)",
    },
    iris: {
      main: "#9CD5F3",
      transp: "rgba(156, 213, 243, 0.8)",
    },
    lagoon: {
      main: "#36C2B4",
      transp: "rgba(54, 194, 180, 0.8)",
    },
    nectar: {
      main: "#FFD9A1",
      transp: "rgba(255, 217, 161, 0.8)",
    },
    coral: {
      main: "#FF7676",
      transp: "rgba(255, 118, 118, 0.8)",
    },
    fire: {
      main: "#FC4C02",
      transp: "rgba(252, 76, 2, 0.8)",
    },
    poseidon: {
      main: "#005276",
      transp: "rgba(0, 82, 118, 0.8)",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  breakpoints: {
    values: {
      hd: 0,
      fullhd: 1600,
      qhd: 2550,
      fk: 3830,
    },
  },
});
