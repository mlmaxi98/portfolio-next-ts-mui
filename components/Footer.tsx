import { Box, Typography, Link } from '@mui/material/';
import GoTopButton from './goTopButton';

const Footer = () => {
    return (
        <>
            <GoTopButton />
            <Box
                component="footer"
                sx={{ py: 5, bgcolor: (theme) => theme.palette.grey[900], mt: 4 }}
            >
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://mui.com/">
                        Joaquín Maxi Cardozo
                    </Link>{' '}
                    {new Date().getFullYear()}.
                </Typography>
            </Box>
        </>
    );
}
export default Footer