import { createTheme, responsiveFontSizes } from '@mui/material';
import { cyan, pink, red } from '@mui/material/colors';

// Create a theme instance.
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: cyan,
      secondary: pink,
      error: {
        main: red[500],
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html {
            scroll-behavior: smooth;
          }
        `,
      },
    },
  })
);

export default theme;