import { Button, Card, CardContent, CardMedia, Chip, Grid, Typography, useTheme } from '@mui/material'
import { SiGithub } from 'react-icons/si';
import { Visibility } from '@mui/icons-material';
interface Project {
    description: string;
    images: string;
    languages: string[];
    title: string;
    direction: boolean;
    demo: string;
    github: string;
}
const Project = ({
    description,
    direction,
    images,
    languages,
    title,
    demo,
    github,

}: Project) => {
    const { palette } = useTheme()
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
                }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    color={palette.mode !== 'dark'
                        ? "primary" : "secondary"}>
                    {title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {description}
                </Typography>
                <Grid container>
                    <Grid container xs={8} md={9} spacing={1} >
                        {
                            languages.map((lang) =>
                                <Grid item key={lang}>
                                    <Chip
                                        label={lang}
                                        color={palette.mode === 'dark' ? "primary" : "secondary"}
                                        size="small"
                                    />
                                </Grid>
                            )
                        }
                    </Grid>
                    <Grid
                        container xs={4}
                        md={3}
                        direction="column"
                        spacing={2}>
                        <Grid item>
                            <Button
                                disabled={!Boolean(github)}
                                href={github}
                                target="_blank"
                                fullWidth
                                color={palette.mode !== 'dark'
                                    ? "primary" : "secondary"}
                                variant="contained"
                                startIcon={<SiGithub />}>
                                Repo
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                disabled={!Boolean(demo)}
                                href={demo}
                                target="_blank"
                                fullWidth
                                color={palette.mode !== 'dark'
                                    ? "primary" : "secondary"}
                                variant="outlined"
                                startIcon={<Visibility />}>
                                Demo
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Project
