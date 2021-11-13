import GoTopButton from '../goTopButton';
import { Box, Typography, Link } from '@mui/material/';
import { useTheme } from "@mui/material";
interface Props {
    color: boolean;
}
const Footer = (props: Props) => {
    const theme = useTheme()
    const { color } = props;

    return (
        <>
            <GoTopButton color={color} />
            <Box
                component="footer"
                sx={{ py: 5, bgcolor: (color ? theme.palette.secondary.dark : theme.palette.primary.main), mt: 4 }}
            >
                <Typography
                    variant="body1"
                    align="center"
                    color={
                        theme.palette.mode === 'dark'
                            ? 'info'
                            : theme.palette.primary.contrastText}
                    sx={{ fontWeight: 700 }}
                >
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