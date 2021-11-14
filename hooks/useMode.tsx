import { useState } from "react";
import { createTheme } from '@mui/material';
import { cyan, purple } from '@mui/material/colors';

const useMode = () => {
    const [mode, setMode] = useState(true)
    const toggleMode = () => setMode(!mode)
    const colorBar = mode ? cyan[500] : purple[500]
    const colorBarHover = mode ? cyan[700] : purple[700]
    const theme = createTheme({
        palette: {
            mode: mode ? 'dark' : 'light',
            primary: purple,
            secondary: cyan,
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
                        scrollbar-color: ${colorBar} transparent;
                        scrollbar-width: thin;
                    }
                    ::-webkit-scrollbar {
                        width: 7.5px;
                    }
                    ::-webkit-scrollbar-track {
                        background: transparent; 
                    }
                    ::-webkit-scrollbar-thumb {
                        background: ${colorBar};
                    }
                    ::-webkit-scrollbar-thumb:hover {
                        background: ${colorBarHover};
                    }
                `,
            },
        },
    });

    return {
        mode,
        toggleMode,
        theme
    }
}

export default useMode