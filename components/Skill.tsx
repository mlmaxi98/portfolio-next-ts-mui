import { styled } from '@mui/material/styles';
import Icon, { IconProps } from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';
interface Props {
    icon: JSX.Element;
    name: string;
}

const Skill = ({ icon, name }: Props) => {
    const { palette } = useTheme()
    const { primary, secondary } = palette
    const mode = palette.mode === 'dark'

    const CustomIcon = styled(Icon)<IconProps>(() => ({
        minWidth: '5rem',
        minHeight: '5rem',
        fontSize: '3rem',
        position: 'relative',
        color: mode ? secondary.contrastText : primary.contrastText,
        background: `linear-gradient(90deg, ${mode ? secondary.dark : primary.dark} 0%, ${mode ? secondary.main : primary.main} 100%)`,
        border: 'none',
        borderRadius: '1000px',
        boxShadow: `0px 0px 24px ${mode ? secondary.dark : primary.dark}`,
        transition: 'all 0.3s ease-in-out 0s',
        outline: 'none',
        padding: '10px',
        zIndex: 3,
        '&:hover': {
            color: !mode ? secondary.contrastText : primary.contrastText,
            transform: 'translateY(-6px)',
            background: `linear-gradient(90deg, ${!mode ? secondary.dark : primary.dark} 0%, ${!mode ? secondary.main : primary.main} 100%)`,
            boxShadow: `0px 0px 24px ${!mode ? secondary.dark : primary.dark}`,
            'p': {
                color: 'red'
            }
        },
        'svg': {
            zIndex: 2
        },
    }));
    return (
        <CustomIcon title={name}>{icon}</CustomIcon>
    );
}

export default Skill