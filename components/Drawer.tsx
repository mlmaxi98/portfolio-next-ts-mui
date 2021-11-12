import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Link,
    Drawer,
    IconButton,
    Divider,
    Switch,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Inbox, Brightness4, Brightness7 } from '@mui/icons-material';


interface Route {
    name: string;
    link: string;
}

interface Props {
    routes: Route[];
    open: boolean;
    onClose: () => void;
    mode: boolean;
    toggleMode: () => void;
}

const NavigationDrawer = (props: Props) => {

    const { routes, open, onClose, mode, toggleMode } = props;

    return (
        <Drawer
            anchor="right"
            open={open}
            variant="temporary"
            onClose={onClose}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    px: 1,
                    minHeight: { xs: 48, sm: 64 },
                }}
            >
                <IconButton size="large" onClick={onClose}>
                    <CloseIcon color="secondary" fontSize="large" />
                </IconButton>
            </Box>
            <Divider />
            <List>
                {routes.map((route) => (
                    <ListItem
                        key={route.name}
                        button
                        onClick={onClose}
                        {...{ component: Link, href: route.link, noLinkStyle: true }}
                    >
                        <ListItemIcon>
                            <Inbox />
                        </ListItemIcon>
                        <ListItemText primary={route.name} />
                    </ListItem>
                ))}
                <ListItem>
                    <ListItemIcon>
                        {mode ? <Brightness7 /> : <Brightness4 />}
                    </ListItemIcon>
                    <Switch checked={mode} onChange={toggleMode} />
                </ListItem>
            </List>
        </Drawer >
    );
}

export default NavigationDrawer