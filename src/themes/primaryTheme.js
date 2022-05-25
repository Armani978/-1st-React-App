import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#2B4162',
    },
    secondary: {
      main: '#721817',
    },
    background: {
      default: '#FA9F42',
    },
    error: {
      main: '#ff645a',
    },
  },
  typography: {
    fontFamily: 'PT Sans',
    fontSize: 20,
    fontWeightLight: 200,
    fontWeightRegular: 200,
    htmlFontSize: 17,
  },
};
const theme=createTheme(themeOptions);
export default theme
