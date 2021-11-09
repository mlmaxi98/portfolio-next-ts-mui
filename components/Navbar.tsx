import {
    AppBar,
    Button,
    Box,
    IconButton,
    Slide,
    Toolbar,
    Typography,
    useScrollTrigger,
} from '@mui/material';
import Link from 'next/link';


interface Props {
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const Navbar = () => {
    return (
        <nav id="navbar">
            <HideOnScroll>
                <AppBar elevation={0}>
                    <Toolbar>
                        <Typography>Joaquín Maxi Cardozo</Typography>
                        <Box ml='auto'>
                            <Link href="#">
                                <Button variant='outlined' >INICIO</Button>
                            </Link>
                            <Link href="#about" scroll>
                                <Button variant='outlined'>ACERCA DE MI</Button>
                            </Link>
                            <Button variant='outlined'>PROYECTOS</Button>
                            <Button variant='outlined'>CONTACTO</Button>

                            <style global jsx>
                                {`
                                    html {
                                        scroll-behavior: smooth;
                                        }
                                `}
                            </style>
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </nav>
    );
}

export default Navbar