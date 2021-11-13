import { Box, Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Box component="section" id="about">
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js v5-beta with TypeScript example
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default About