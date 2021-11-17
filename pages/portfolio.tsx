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
                py: 10,
                px: 2,
            }}>
            <Container>
                <Grid
                    container
                    direction='column'
                    spacing={5}>
                    <Grid item xs={12}>
                        <Title title="Portafolio" size={2.5} />
                    </Grid>
                    <Grid
                        container
                        item
                        xs={12}
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
                </Grid>
            </Container >
        </Box>
    )
}

export default Portfolio