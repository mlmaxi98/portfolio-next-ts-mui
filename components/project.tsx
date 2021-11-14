import { Button, Card, CardActions, CardContent, CardMedia, Chip, Grid, Typography, useTheme } from '@mui/material'
interface Project {
    description: string;
    images: string;
    languages: string[];
    subtitle: string;
    title: string;
    direction: boolean;
}
const Project = ({
    description,
    direction,
    images,
    languages,
    title,
    subtitle,
}: Project) => {
    const theme = useTheme()
    const cardDirection = direction ? 'row' : 'row-reverse'
    return (
        <Card
            elevation={4}
            sx={{
                display: 'flex',
                height: '100%',
                width: '100%',
                flexDirection: {
                    xs: 'column',
                    sm: cardDirection,
                    md: 'column'
                },
            }}
        >
            <CardMedia
                image={images}
                component="img"
                alt="green iguana"
                sx={{
                    width: {
                        xs: '100%',
                        sm: '40%',
                        md: '100%'
                    },
                    objectFit: 'cover',
                    zIndex: 2,
                }}
            />
            <CardContent
                sx={{
                    width: {
                        xs: '100%',
                        sm: '60%',
                        md: '100%',
                    },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    zIndex: 2,
                }} >
                <Typography variant="h5" gutterBottom color={theme.palette.mode !== 'dark' ? "primary" : "secondary"}>
                    {title}
                </Typography>
                {/*   <Typography variant="h6" gutterBottom>
                    {subtitle}
                </Typography> */}
                <Typography variant="subtitle1" gutterBottom>
                    {description}
                </Typography>
                <Grid container spacing={1} >
                    {
                        languages.map((lang) =>
                            <Grid item >
                                <Chip
                                    key={lang}
                                    label={lang}
                                    color={theme.palette.mode === 'dark' ? "primary" : "secondary"}
                                    size="small"
                                //variant='outlined'
                                />
                            </Grid>
                        )
                    }
                </Grid>
                <CardActions>
                    <Button size="small">GitHub</Button>
                    <Button size="small">Demo</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default Project
