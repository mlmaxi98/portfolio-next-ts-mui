import { Container, Grid, Box, Typography } from '@mui/material'
import Project from '../components/project'
import { myProjects } from '../components/Consts'

const Projects = () => {
    return (
        <Box component="section" id="projects">
            <Container
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    my: 2
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Proyectos
                </Typography>
                {
                    myProjects.map((project, i) => (
                        <Grid
                            key={project.title}
                            container
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
            </Container>
        </Box>
    )
}

export default Projects