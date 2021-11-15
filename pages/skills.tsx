import {
    Container,
    Grid,
    Box,
    Link,
    useMediaQuery,
    useTheme
} from '@mui/material/';
import { techs } from '../components/Consts'
import Skill from '../components/Skill';
import Title from '../components/Title';
const Skills = () => {
    const theme = useTheme();
    const responsive = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box
            component="section"
            id="skills"
            sx={{
                minHeight: {
                    xs: '100vh',
                    sm: '30vh',
                },
                my: 5,
                px: 2,
            }}
        >
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <Title title="Habilidades" size={2.5} />
                <Grid container spacing={3} justifyContent='center'>
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
            </Container>
        </Box>
    )
}

export default Skills
