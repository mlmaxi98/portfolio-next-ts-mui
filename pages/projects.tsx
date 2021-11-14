import { Container, Grid, Box, Typography } from '@mui/material'
import Project from '../components/project'
import { myProjects } from '../components/Consts'
import { useTheme } from '@mui/system'

const Projects = () => {
    const theme = useTheme()
    return (
        <Box
            component="section"
            id="projects"
            sx={{
                minHeight: '100vh',
                my: 5,
                px: 2,
            }}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>

                <Typography
                    variant="h4"
                    color={theme.palette.mode === 'dark' ?
                        'primary' : 'secondary'}
                    sx={{
                        my: 5,
                        textAlign: 'center'
                    }}
                >
                    Proyectos
                </Typography>
                <Grid
                    container
                    spacing={8}>
                    {
                        myProjects.map((project, i) => (
                            <Grid
                                key={project.title}
                                item
                                xs={12}
                                md={6}
                            >
                                <Project
                                    description={project.description}
                                    images={project.images[0]}
                                    languages={project.languages}
                                    subtitle={project.subtitle}
                                    title={project.title}
                                    direction={i % 2 === 1 ? false : true}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default Projects