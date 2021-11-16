import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
interface Props {
    title: string;
    size: number;
}

const Title = ({ title, size }: Props) => {
    const { palette } = useTheme()
    const { primary, secondary } = palette
    const mode = palette.mode === 'dark'

    const CustomTitle = styled(Typography)<TypographyProps>(() => ({
        color: mode ? secondary.main : primary.main,
        textShadow: `0px 0px 5px ${mode ? secondary.main : primary.light},
        0px 0px 10px ${mode ? secondary.main : primary.light},
        0px 0px 20px ${mode ? secondary.main : primary.light}`,
        textAlign: 'center',
        margin: '2rem 0',
        fontSize: `${size}rem`,
    }));

    return (
        <CustomTitle> {title} </CustomTitle>
    );
}

export default Title