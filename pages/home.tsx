import { Box, Container, Grid } from '@mui/material/';
import Title from '../components/Title';

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
                    <Title size={1.5} title="Soy Joaquín Maximiliano Cardozo y soy un Full Stack Web Developer" />
                    {/* <Typography>
                        Soy Joaquín Maximiliano Cardozo y soy un Full Stack Web Developer
                    </Typography> */}
                </Grid>
            </Container>
        </Box>
    );
}
export default Home