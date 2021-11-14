import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Typography, useTheme, useMediaQuery } from '@mui/material'

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
    const media = useMediaQuery(theme.breakpoints.up('sm'))
    const cardDirection = media ?
        direction ?
            'row' :
            'row-reverse'
        : 'column'
    return (
        <Card
            elevation={2}
            sx={{
                display: 'flex',
                height: '100%',
                width: '100%',
                my: 4,
                flexDirection: cardDirection,
            }}
        >
            <CardMedia
                image={images}
                component="img"
                alt="green iguana"
                sx={{
                    width: {
                        xs: '100%',
                        sm: '50%'
                    },
                    objectFit: 'cover',
                }}
            />
            <CardContent sx={{
                width: {
                    xs: '100%',
                    lg: '50%'
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }} >
                <Typography variant="h4" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    {subtitle}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {description}
                </Typography>
                <Box>
                    {
                        languages.map((lang) =>
                            <Chip
                                key={lang}
                                label={lang}
                                color="primary"
                                size="small"
                            />
                        )
                    }
                </Box>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default Project
