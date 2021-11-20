import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export let theme = createTheme({
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "0.8rem",
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        input: {
          height: "0.4rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "0.8rem",
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#fff",
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "0.4rem",
        },
      },
    },
  },

  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: "#322dc8",
      main: "#1d1a72",
      dark: "#37349A",
      contrastText: "#fff",
    },
    secondary: {
      light: "#00D181",
      main: "#1a731d",
      dark: "",
      contrastText: "#fff",
    },
    tertiary: {
      light: "#9f2420",
      main: "#731d1a",
      dark: "",
      contrastText: "#fff",
    },
    error: {
      light: "",
      main: "#F44335",
      dark: "",
      contrastText: "#fff",
    },
    warning: {
      light: "",
      main: "#FF9800",
      dark: "",
      contrastText: "#fff",
    },
    info: {
      light: "",
      main: "#11cb5f",
      dark: "",
      contrastText: "#fff",
    },
    success: {
      light: "",
      main: "#4BB04F",
      dark: "",
      contrastText: "#fff",
    },
    accent: {
      1: "#eaeaea",
      2: "#cecece",
      3: "#5e5e5e",
    },
  },
});
theme = responsiveFontSizes(theme);
