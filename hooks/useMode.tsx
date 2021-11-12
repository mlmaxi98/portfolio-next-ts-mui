import { useState } from "react";
import { createTheme } from '@mui/material';
import { cyan, pink, red } from '@mui/material/colors';


const useMode = () => {
    const [mode, setMode] = useState(false)
    const toggleMode = () => setMode(!mode)
    const colorBar = !mode ? pink[500] : cyan[500]
    const theme = createTheme(
        {
            palette: {
                mode: mode ? 'dark' : 'light',
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
                  background: ${colorBar};
                }
                ::-webkit-scrollbar-thumb:hover {
                  background: #555;
              `,
                },
            },
        }
    );

    return {
        mode,
        toggleMode,
        theme
    }
}

export default useMode