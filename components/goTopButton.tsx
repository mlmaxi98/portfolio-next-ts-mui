import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { Stack } from '@mui/material';
import { keyframes } from '@mui/system'
import { MdKeyboardArrowUp as Top } from "react-icons/md";

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

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
    minWidth: '3rem',
    minHeight: '3rem',
    fontSize: '1.5rem',
    letterSpacing: '1.3px',
    fontWeight: 700,
    color: theme.palette.secondary.contrastText,
    background: `linear-gradient(90deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.main} 100%)`,
    border: 'none',
    borderRadius: '1000px',
    boxShadow: `0px 0px 24px ${theme.palette.secondary.dark}`,
    transition: 'all 0.3s ease-in-out 0s',
    cursor: 'pointer',
    outline: 'none',
    position: 'relative',
    padding: '10px',
    '&:hover, &:focus': {
        color: theme.palette.secondary.contrastText,
        transform: 'translateY(-6px)',
    },
    '&::before': {
        content: '""',
        borderRadius: '1000px',
        width: '4rem',
        height: '4rem',
        border: `6px solid ${theme.palette.secondary.main}`,
        boxShadow: `0 0 0px ${theme.palette.secondary.dark}`,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0,
        transition: 'all .3s ease-in-out 0s',
    },


    '&::after': {
        content: '""',
        width: '2rem',
        height: '2rem',
        borderRadius: '100%',
        border: `6px solid ${theme.palette.secondary.main}`,
        position: 'absolute',
        zIndex: -1,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animation: `${ring} 1.5s infinite`,
    },
    '&:hover::after, &:focus::after': {
        animation: 'none',
        display: 'none',
    },
    '&:hover::before, &:focus::before': {
        opacity: 1,
    },
}));

const GoTopButton = () => {
    return (
        <Stack direction="row" justifyContent="center" sx={{ height: '3rem' }}>
            <CustomButton variant="outlined" color='secondary' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} >
                <Top />
            </CustomButton>
        </Stack>
    );
}

export default GoTopButton