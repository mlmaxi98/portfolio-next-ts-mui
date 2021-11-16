import { Box, Container } from '@mui/material';
import Title from '../components/Title';
import Skills from './skills'

const About = () => {
  return (
    <Box component="section" id="about">
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Title title="Acerca de mi" size={2.5} />
        </Box>
        <Box sx={{ my: 4 }}>
          <Title title="Curriculum" size={2.5} />
        </Box>
      </Container>
      <Skills />

    </Box>
  );
}

export default About