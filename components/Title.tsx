import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
interface Props {
    title: string;
    size: number;
}

const Title = ({ title, size }: Props) => {
    const theme = useTheme()
    const mode = theme.palette.mode === 'dark'
    const primary = theme.palette.primary
    const secondary = theme.palette.secondary

    const CustomTitle = styled(Typography)<TypographyProps>(() => ({
        color: mode ? secondary.main : primary.main,
        textShadow: `0px 0px 5px ${mode ? secondary.main : primary.light},
        0px 0px 10px ${mode ? secondary.main : primary.light},
        0px 0px 20px ${mode ? secondary.main : primary.light}`,
        textAlign: 'center',
        margin: '2rem 0',
        fontSize: `${size}rem`,
        //fontWeight: 700
    }));
    return (
        <CustomTitle >
            {title}
        </CustomTitle>
    );
}

export default Title