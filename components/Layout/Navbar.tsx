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
    Switch,
    FormControlLabel
} from '@mui/material';
import {
    Menu as MenuIcon,
    Brightness7 as Sun,
    Brightness4 as Moon
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import NavigationDrawer from '../Drawer';
import Typing from 'react-typing-effect';
interface Props {
    children: React.ReactElement;
}
interface NavProps {
    mode: boolean;
    toggleMode: () => void;
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
const Navbar = (props: NavProps) => {
    const theme = useTheme();
    const { mode, toggleMode } = props;
    const responsive = !useMediaQuery(theme.breakpoints.up('md'));
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
                            <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                                {'<'}
                                <Typing
                                    text={[
                                        `Joaquin`,
                                        `Maxi`,
                                        `Cardozo`
                                    ]}
                                    speed={50}
                                    eraseSpeed={100}
                                    typingDelay={1000}
                                    eraseDelay={2000}
                                />
                                {' />'}
                            </Typography>
                            <Box sx={{ display: 'flex' }} >
                                {
                                    responsive
                                        ? <IconButton
                                            aria-label="Open Navigation"
                                            size="large"
                                            sx={{ marginLeft: 'auto' }}
                                            onClick={handleDrawerToggle}
                                        >
                                            <MenuIcon
                                                fontSize="large"
                                                sx={{ color: mode ? theme.palette.secondary.main : theme.palette.primary.contrastText }}
                                            />
                                        </IconButton>
                                        : <>
                                            {Routes.map(route =>
                                                <Link
                                                    href={route.link}
                                                    key={route.name}
                                                >
                                                    <Button
                                                        variant='text'
                                                        color={mode ? 'secondary' : 'inherit'}
                                                    >
                                                        {route.name}
                                                    </Button>
                                                </Link>)}
                                            <FormControlLabel
                                                control={
                                                    <Switch checked={mode} onChange={toggleMode} color='secondary' />}
                                                label={mode ? <Sun sx={{ display: 'flex' }} /> : <Moon sx={{ display: 'flex' }} />}
                                                labelPlacement="start"
                                            />
                                        </>
                                }
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            {
                responsive
                && <NavigationDrawer
                    routes={Routes}
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    mode={mode}
                    toggleMode={toggleMode}
                />
            }
        </Box >
    );
}

export default Navbar