import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material/';
import { Description, ChevronRight } from '@mui/icons-material';
import Skill from '../components/Skill';
import Title from '../components/Title';
import { techs, aboutMe } from '../components/Consts';
const AboutMe = () => {
  const { breakpoints, palette } = useTheme();
  const responsive = useMediaQuery(breakpoints.down('md'));
  const mode = palette.mode === 'dark'
  return (
    <Box component="section" id="about" sx={{
      py: 10,
      px: 2,
    }}>
      <Container>

        <Grid
          container
          direction='column'
          justifyContent="space-between"
          spacing={12}
        >

          <Grid container item spacing={4}>
            <Grid
              item
              xs={12}
              md={3}
              alignItems='center'>
              <Title title="Acerca de mi" size={2.5} />
            </Grid>
            <Grid container item xs={12} md={9} spacing={2} justifyContent='center'>
              <List disablePadding>
                {
                  aboutMe.map(about => {
                    return (
                      <ListItem key={about}>
                        <ListItemIcon>
                          <ChevronRight
                            color={mode ? 'primary' : 'secondary'}
                          />
                        </ListItemIcon>
                        <ListItemText primary={about} />
                      </ListItem>
                    )
                  })
                }
                <ListItem>
                  <ListItemIcon>
                    <ChevronRight
                      color={mode ? 'primary' : 'secondary'}
                    />
                  </ListItemIcon>
                  <Button
                    fullWidth
                    href='/cv.pdf'
                    target="_blank"
                    color={mode ? 'secondary' : 'primary'}
                    size="large"
                    variant="outlined"
                    endIcon={<Description />}
                  >
                    Descargar CV
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </Grid>

          <Grid container item spacing={4}>
            <Grid
              item
              xs={12}
              md={3}
              alignItems='center'>
              <Title title="Habilidades" size={2.5} />
            </Grid>
            <Grid container item xs={12} md={9} spacing={3} justifyContent='center'>
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
        </Grid>

      </Container>

    </Box>
  );
}

export default AboutMe