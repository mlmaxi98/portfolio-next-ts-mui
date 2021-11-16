import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Particles from '../components/Particles'
import useMode from '../hooks/useMode'

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = (props: MyAppProps) => {
  const { theme, mode, toggleMode } = useMode();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Joaquín Maxi Cardozo | Full Stack Web Developer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content={mode ? theme.palette.secondary.main : theme.palette.primary.main} />
        <meta content="Un Full Stack Developer apasionado por la programación y enfrentar nuevos retos" name="description" />
        <meta content="portfolio" name="keywords" />
        <meta content="English" name="language" />
        <meta content="Joaquín Cardozo" name="author" />
        <link href="/favicon.ico" rel="icon" />
        <meta key="ogimage" content="https://pngimg.com/uploads/letter_j/letter_j_PNG51.png" property="og:image" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Particles color={mode} />
        <Navbar toggleMode={toggleMode} mode={mode} />
        <Component {...pageProps} />
        <Footer color={mode} />
      </ThemeProvider>
    </CacheProvider>
  );
}
export default App