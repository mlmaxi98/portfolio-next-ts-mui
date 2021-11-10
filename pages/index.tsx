import * as React from 'react';
import Head from 'next/head';
import { Box, Button, Container, Typography } from '@mui/material'
import About from './about';
import Home from './home';
export default function Index() {

  return (
    <>
      <Head>
        <title>Joaquín Maxi Cardozo | Full Stack Web Developer</title>
        <meta content="Un Full Stack Developer con ganas de buscar nuevos retos" name="description" />
        <meta content="portfolio" name="keywords" />
        <meta content="English" name="language" />
        <meta content="Joaquín Cardozo" name="author" />
        <link href="/favicon.ico" rel="icon" />
        <meta key="ogimage" content="https://pngimg.com/uploads/letter_j/letter_j_PNG51.png" property="og:image" />
      </Head>
      <Home />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
      <About />
    </>
  );
}
