import { createTheme, Theme } from "@mui/material/styles";

export const color = "#787486";
export const color2 = "#0D062D";

export const getAppTheme = (mode = "light"): Theme => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5030E5",
        light: "rgba(80, 48, 229, 0.2)",
      },
    },
    typography: {
      fontFamily: "Inter",
      fontSize: 16,
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
      h1: {
        fontSize: 46,
        fontWeight: 600,
        fontStyle: "normal",
        lineHeight: "90%",
        color: color2,
      },
      h2: {
        fontSize: 20,
        fontWeight: 600,
        fontStyle: "normal",
        lineHeight: "90%",
        color: color2,
      },
      h3: {
        fontSize: 18,
        color: color2,
      },
      h4: {
        fontSize: 16,
        color: color2,
      },
      h5: {
        fontSize: 14,
        color: color2,
      },
      h6: {
        fontSize: 12,
        color: color2,
      },
      body1: {
        fontSize: 14,
        lineHeight: "100%",
        color,
      },
      body2: {
        fontSize: 16,
        lineHeight: "100%",
        color,
      },
      button: {
        fontSize: 16,
        color,
        fontWeight: 500,
        textTransform: "capitalize",
        lineHeight: "100%",
      },
      caption: {
        fontSize: 12,
        color,
      },
    },
    components: {
      MuiLink: {
        defaultProps: {
          sx: {
            textDecoration: "none",
            ":hover": { textDecoration: "underline" },
          },
        },
      },
      MuiButton: {
        defaultProps: { sx: { ":hover": { background: "inherit" } } },
      },
    },
    breakpoints: {
      values: {
        xs: 90,
        sm: 1060,
        md: 1420,
        lg: 1600,
        xl: 1920,
      },
    },
  });
  return theme;
};
