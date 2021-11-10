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
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
//import Link from 'next/link';
import { Inbox } from '@mui/icons-material';

interface Route {
    name: string;
    link: string;
}

interface Props {
    routes: Route[];
    open: boolean;
    onClose: () => void;
}

const NavigationDrawer = (props: Props) => {

    const { routes, open, onClose } = props;

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
            </List>
        </Drawer >
    );
}

export default NavigationDrawer