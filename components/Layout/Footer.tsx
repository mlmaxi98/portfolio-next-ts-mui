import GoTopButton from '../goTopButton';
import { Box, Typography, Link } from '@mui/material/';
import { useTheme } from "@mui/material";

const Footer = () => {
    const { palette } = useTheme()
    const { primary, secondary } = palette
    const color = palette.mode === 'dark'

    return (
        <>
            <GoTopButton />
            <Box
                component="footer"
                sx={{
                    py: 5,
                    mt: 4,
                    bgcolor: (color ? secondary.dark : primary.dark),
                }}
            >
                <Typography
                    variant="body1"
                    align="center"
                    color={color
                        ? 'info'
                        : primary.contrastText}
                    sx={{ fontWeight: 700 }}
                >
                    {'© '}
                    <Link color="inherit" href="https://www.instagram.com/mlmaxi98/">
                        Joaquín Maxi Cardozo
                    </Link>{' '}
                    {new Date().getFullYear()}.
                </Typography>
            </Box>
        </>
    );
}
export default Footer