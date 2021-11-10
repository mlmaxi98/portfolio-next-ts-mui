import { createTheme, responsiveFontSizes } from '@mui/material';
import { cyan, pink, red } from '@mui/material/colors';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: pink,
      secondary: cyan,
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
            -webkit-scroll-behavior: smooth;
          }
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: trasparent; 
          }
          ::-webkit-scrollbar-thumb {
            background: ${pink[700]};
            border-radius: 8px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
        `,
      },
    },
  })
);

export default theme;