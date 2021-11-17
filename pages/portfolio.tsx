import { Container, Grid, Box } from '@mui/material'
import Project from '../components/project'
import Title from '../components/Title'
import { myProjects } from '../components/Consts'

const Portfolio = () => {
    return (
        <Box
            component="section"
            id="portfolio"
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
                <Title title="Portafolio" size={2.5} />
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
                                    title={project.title}
                                    direction={i % 2 === 1 ? false : true}
                                    demo={project.demo}
                                    github={project.github}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container >
        </Box>
    )
}

export default Portfolio