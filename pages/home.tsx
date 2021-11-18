import { Box, Container, Button, Grid, useTheme } from '@mui/material/';
import Title from '../components/Title';
import Link from 'next/link';
const Home = () => {
    const { palette } = useTheme()
    return (
        <Box component="section" id="home">
            <Container
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                }}
                maxWidth='md'>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        md={9}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            py: 20,
                        }}>
                        <Title
                            size={2}
                            title={[
                                "Hola! Mi nombre es ",
                                "Joaquín Maxi Cardozo",
                                "y soy un ",
                                "Full Stack Developer",
                            ]}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        md={3}
                        spacing={2}>
                        <Grid item xs={12}
                            sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <Link href="#portfolio">
                                <Button
                                    fullWidth
                                    color={palette.mode !== 'dark'
                                        ? "primary" : "secondary"}
                                    variant="contained">
                                    Ver portafolio
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                            <Link href="#contactme">
                                <Button
                                    fullWidth
                                    color={palette.mode !== 'dark'
                                        ? "primary" : "secondary"}
                                    variant="outlined">
                                    Ver contactos
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    );
}
export default Home