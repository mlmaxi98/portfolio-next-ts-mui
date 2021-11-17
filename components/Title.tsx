import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface Props {
    title: string | string[];
    size: number;
    left?: boolean;
}

const Title = ({ title, size, left }: Props) => {
    const { palette } = useTheme()
    const { primary, secondary } = palette
    const mode = palette.mode === 'dark'

    const CustomTitle = styled(Typography)<TypographyProps>(() => ({
        color: mode ? secondary.main : primary.main,
        textShadow: `0px 0px 5px ${mode ? secondary.main : primary.light},
        0px 0px 10px ${mode ? secondary.main : primary.light},
        0px 0px 20px ${mode ? secondary.main : primary.light}`,

        fontSize: `${size}rem`,
    }));
    if (typeof title === 'string') {
        return (
            <CustomTitle textAlign={left ? 'left' : 'center'}> {title} </CustomTitle>
        );
    }
    else {
        return (
            <Typography component="span" textAlign='left' >
                {
                    title.map((str, i) => {
                        if (i % 2 !== 1) {
                            return (
                                <Typography component="span"
                                    sx={{
                                        fontSize: `${size}rem`,
                                    }}>
                                    {str}
                                </Typography>
                            )
                        }
                        else {
                            return (
                                <CustomTitle> {str} </CustomTitle>
                            )
                        }
                    })
                }
            </Typography>
        )
    }
}

export default Title