
import {
    Container,
    Grid,
    Box,
} from '@mui/material/';
import { useTheme } from '@mui/system'
import { techs } from '../components/Consts'
import Skill from '../components/Skill';
import Title from '../components/Title';

const Skills = () => {
    const theme = useTheme()
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
                {/* <Typography variant="h4"
                    color={
                        theme.palette.mode === 'dark' ?
                            'primary' : 'secondary'}
                    sx={{
                        my: 5,
                        textAlign: 'center',
                    }}>
                    Habilidades
                </Typography> */}
                <Title title="Habilidades" size={2.5} />
                <Grid container spacing={3} justifyContent='center'>
                    {
                        techs.map((tech) => (
                            <Grid item
                                key={tech.name}
                                sx={{

                                }}
                            >
                                <Skill icon={tech.icon} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default Skills
