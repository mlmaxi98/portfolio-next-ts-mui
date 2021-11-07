import * as React from 'react';
import { Box, Button, Container, Typography } from '@mui/material'
import Copyright from '../src/Copyright';

export default function Index() {

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Empezando el portafolio con Next, TS y MUI
        </Typography>
        <Button variant="contained" >Primary</Button>
        <Copyright />
      </Box>
    </Container>
  );
}