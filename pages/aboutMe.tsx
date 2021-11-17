import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  useMediaQuery,
  useTheme,
  Typography
} from '@mui/material/';
import DescriptionIcon from '@mui/icons-material/Description';
import Skill from '../components/Skill';
import Title from '../components/Title';
import { techs } from '../components/Consts'
const AboutMe = () => {
  const { breakpoints, palette } = useTheme();
  const responsive = useMediaQuery(breakpoints.down('md'));
  const mode = palette.mode === 'dark'
  return (
    <Box component="section" id="about" sx={{
      minHeight: '100vh',
      py: 5,
      px: 2,
    }}>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Grid container spacing={10}>

          <Grid item container spacing={4}>
            <Grid
              item
              xs={12}
              sm={4}
              alignItems='center'>
              <Title title="Acerca de mi" size={2.5} />
            </Grid>
            <Grid item container xs={12} sm={8} justifyContent='center' spacing={2}>
              <Grid item xs={12}>
                <Typography variant='body1'>
                  Desarrollador Full Stack residente de Jujuy - Argentina
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body1'>
                  Amante de la programación disfruto mucho el trabajo en equipo y puedo brindar soluciones óptimas
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body1'>
                  Amante de la programación disfruto mucho el trabajo en equipo y puedo brindar soluciones óptimas
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid
              item
              xs={12}
              sm={4}
              alignItems='center'>
              <Title title="Habilidades" size={2.5} />
            </Grid>
            <Grid item container xs={12} sm={8} spacing={3} justifyContent='center'>
              {
                techs.map((tech) => (
                  <Grid key={tech.name} item>
                    {
                      responsive
                        ? <Skill icon={tech.icon} name={tech.name} />
                        : <Link href={tech.url} target="_blank" rel="noreferrer">
                          <Skill icon={tech.icon} name={tech.name} />
                        </Link>
                    }
                  </Grid>
                ))
              }
            </Grid>
          </Grid>

          <Grid item container spacing={4}>
            <Grid
              item
              xs={12}
              sm={4}
              alignItems='center'>
              <Title title="Curriculum" size={2.5} />
            </Grid>
            <Grid item container xs={12} sm={8} alignItems='center' spacing={4}>
              <Grid item xs={12}>
                <Typography variant='body1'>
                  Puedes descargar mi Curriculum haciendo click en el siguiente botón
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  href='/cv.pdf'
                  target="_blank"
                  color={mode ? 'secondary' : 'primary'}
                  size="large"
                  variant="outlined"
                  endIcon={<DescriptionIcon />}
                >
                  Descargar CV
                </Button>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default AboutMe