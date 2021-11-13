import { Box, Container, Typography, Grid } from '@mui/material/';

const Home = () => {
    return (
        <Box component="section" id="home">
            <Container
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Grid >
                    <Typography>
                        Soy Joaquín Maximiliano Cardozo y soy un Full Stack Web Developer
                    </Typography>
                </Grid>
            </Container>
        </Box>
    );
}
export default Home