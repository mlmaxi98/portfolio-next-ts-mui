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
    FormControlLabel,
} from '@mui/material';
import {
    Close,
    Brightness4 as Moon,
    Brightness7 as Sun,
} from '@mui/icons-material';


interface Route {
    name: string;
    link: string;
    icon: JSX.Element;
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
            onClose={onClose}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: { xs: 48, sm: 64 },
                }}>
                <IconButton size="large" onClick={onClose}>
                    <Close color={mode ? "secondary" : "primary"} fontSize="large" />
                </IconButton>
                <FormControlLabel
                    control={<Switch
                        checked={mode}
                        onChange={toggleMode}
                        color='secondary'
                    />}
                    label={mode
                        ? <Sun sx={{ display: 'flex' }} />
                        : <Moon sx={{ display: 'flex' }} />}
                    labelPlacement="start"
                    sx={{ paddingRight: 2, marginRight: 0 }} />
            </Box>
            <Divider />
            <List>
                {routes.map((route) => (
                    <ListItem
                        key={route.name}
                        button
                        onClick={onClose}
                        {...{ component: Link, href: route.link }}>
                        <ListItemIcon>
                            {route.icon}
                        </ListItemIcon>
                        <ListItemText primary={route.name} />
                    </ListItem>
                ))}
            </List>
        </Drawer >
    );
}

export default NavigationDrawer