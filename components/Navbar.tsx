import { useState } from 'react';
import {
    AppBar,
    Button,
    Box,
    Slide,
    Toolbar,
    Typography,
    useMediaQuery,
    useScrollTrigger,
    Container,
    IconButton,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import NavigationDrawer from './Drawer';
import TypeAnimation from 'react-type-animation';
interface Props {
    children: React.ReactElement;
}
interface NavProps {
    mode: boolean;
    toggleColor: () => void;
}


const HideOnScroll = (props: Props) => {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}
const Navbar = () => {
    const theme = useTheme();
    const responsive = useMediaQuery(theme.breakpoints.up('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const Routes = [
        { name: 'INICIO', link: '/#' },
        { name: 'HABILIDADES', link: '/#skills' },
        { name: 'PROYECTOS', link: '/#projects' },
        { name: 'ACERCA DE MI', link: '/#about' },
        { name: 'CONTACTAME', link: '/#contactme' },
    ]

    return (
        <Box component="section">

            <HideOnScroll>
                <AppBar elevation={0}>
                    <Container maxWidth="lg">
                        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>

                            {/* <Link href="/#"> */}
                                <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <TypeAnimation
                                        sequence={[
                                            `<Joaquin`, 2000,
                                            `<Maxi`, 2000,
                                            `<Cardozo`, 2000,
                                        ]}
                                        repeat={Infinity}
                                        wrapper="h4"
                                    />
                                    {' />'}
                                </Typography>
                            {/* </Link> */}
                            <Box sx={{ display: 'flex' }} >
                                {
                                    responsive
                                        ? Routes.map(route =>
                                            <Link
                                                href={route.link}
                                                key={route.name}
                                            >
                                                <Button
                                                    variant='text'
                                                    color='info'
                                                >
                                                    {route.name}
                                                </Button>
                                            </Link>)
                                        : <IconButton
                                            aria-label="Open Navigation"
                                            size="large"
                                            sx={{ marginLeft: 'auto' }}
                                            onClick={handleDrawerToggle}
                                        >
                                            <MenuIcon color="secondary" fontSize="large" />
                                        </IconButton>
                                }
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            {
                !responsive
                && <NavigationDrawer
                    routes={Routes}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                />
            }
        </Box >
    );
}

export default Navbar