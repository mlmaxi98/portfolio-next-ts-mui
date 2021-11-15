import { Container, Grid, Box } from '@mui/material'
import Project from '../components/project'
import Title from '../components/Title'
import { myProjects } from '../components/Consts'

const Projects = () => {
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
                <Title title="Proyectos" size={2.5} />
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