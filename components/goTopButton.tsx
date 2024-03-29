import { styled, useTheme } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { Stack } from '@mui/material';
import { keyframes } from '@mui/system'
import { MdKeyboardArrowUp as Top } from "react-icons/md";

const GoTopButton = () => {
    const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    const { palette } = useTheme()
    const { primary, secondary } = palette
    const color = palette.mode === 'dark'

    const ring = keyframes`
        0% {
            width: 3rem;
            height: 3rem;
            opacity: 1;
        }
        100% {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    `;

    const CustomButton = styled(Button)<ButtonProps>(() => ({
        display: 'flex',
        alignItems: 'center',
        minWidth: '3rem',
        minHeight: '3rem',
        fontSize: '1.5rem',
        letterSpacing: '1.3px',
        fontWeight: 700,
        color: color ? secondary.contrastText : primary.contrastText,
        background: `linear-gradient(90deg, ${color ? secondary.dark : primary.dark} 0%, ${color ? secondary.main : primary.main} 100%)`,
        border: 'none',
        borderRadius: '1000px',
        boxShadow: `0px 0px 24px ${color ? secondary.dark : primary.dark}`,
        transition: 'all 0.3s ease-in-out 0s',
        cursor: 'pointer',
        outline: 'none',
        position: 'relative',
        padding: '10px',
        '&:hover': {
            color: color ? secondary.contrastText : primary.contrastText,
            transform: 'translateY(-6px)',
        },
        '&::before': {
            content: '""',
            color: color ? secondary.contrastText : primary.contrastText,
            borderRadius: '1000px',
            width: '4rem',
            height: '4rem',
            border: `6px solid ${color ? secondary.main : primary.main}`,
            boxShadow: `0 0 0px ${color ? secondary.dark : primary.dark}`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            transition: 'all .3s ease-in-out 0s',
        },
        '&::after': {
            content: '""',
            color: color ? secondary.contrastText : primary.contrastText,
            width: '2rem',
            height: '2rem',
            borderRadius: '100%',
            border: `6px solid ${color ? secondary.main : primary.main}`,
            position: 'absolute',
            zIndex: -1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `${ring} 1.5s infinite`,
        },
        '&:hover::after': {
            animation: 'none',
            display: 'none',
        },
        '&:hover::before': {
            opacity: 1,
        },
    }));
    return (
        <Stack direction="row" justifyContent="center" sx={{ height: '3rem' }}>
            <CustomButton onClick={goTop}>
                <Top />
            </CustomButton>
        </Stack>
    );
}

export default GoTopButton