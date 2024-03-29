import { useState } from 'react';
import * as Yup from 'yup'
import { Formik, Form, ErrorMessage, FormikHelpers } from 'formik';
import { Avatar, Box, Container, Button, Grid, Card, CardContent, CardActions, TextField, useTheme, Typography, IconButton, Link } from '@mui/material/';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Title from '../components/Title';
import { networks } from '../components/Consts'

interface ContactFields {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

const ContactMe = () => {
    const { palette } = useTheme()
    const mode = palette.mode === 'dark'

    const initValues: ContactFields = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    }


    const validateSchema = Yup.object().shape({
        firstName: Yup.string().required("Este campo es requerido"),
        lastName: Yup.string().required("Este campo es requerido"),
        email: Yup.string().email("Ingrese un correo válido").required("Este campo es requerido"),
        message: Yup.string().required("Este campo es requerido"),
    })

    const [loading, setLoading] = useState(false)

    const onSubmit = async (
        values: ContactFields, onSubmitProps: FormikHelpers<ContactFields>
    ) => {
        try {
            setLoading(true)
            const res = await fetch('/api/mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            })
            if (res.ok) {
                onSubmitProps.resetForm()
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }


    }
    return (
        <Box
            component="section"
            id="contactme"
            sx={{
                py: 10,
                px: 2,
            }}>
            <Container maxWidth="sm">

                <Grid
                    container
                    direction='column'
                    spacing={5}>

                    <Grid item>
                        <Title size={2.5} title="Contáctame" />
                    </Grid>

                    <Grid item>
                        <Card>
                            <CardContent>
                                <Formik initialValues={initValues} onSubmit={onSubmit} validationSchema={validateSchema}>
                                    {
                                        ({ getFieldProps }) => (
                                            <Form>
                                                <Grid
                                                    container
                                                    spacing={2}
                                                >
                                                    <Grid item xs={12} md={6}>
                                                        <TextField
                                                            color={mode ? 'secondary' : 'primary'}
                                                            fullWidth
                                                            variant='outlined'
                                                            {...getFieldProps('firstName')}
                                                            label="Nombre"
                                                            placeholder="Ingrese su nombre *"
                                                            helperText={<ErrorMessage name='firstName' />}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} md={6}>
                                                        <TextField
                                                            color={mode ? 'secondary' : 'primary'}
                                                            fullWidth
                                                            variant='outlined'
                                                            {...getFieldProps('lastName')}
                                                            placeholder="Ingrese su apellido *"
                                                            label="Apellido"
                                                            helperText={<ErrorMessage name='lastName' />}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            color={mode ? 'secondary' : 'primary'}
                                                            fullWidth
                                                            variant='outlined'
                                                            label="Email"
                                                            {...getFieldProps('email')}
                                                            placeholder="Ingrese su email *"
                                                            type="Email"
                                                            helperText={<ErrorMessage name='email' />}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <TextField
                                                            color={mode ? 'secondary' : 'primary'}
                                                            fullWidth
                                                            multiline
                                                            rows={4}
                                                            variant='outlined'
                                                            {...getFieldProps('message')}
                                                            label="Mensaje"
                                                            placeholder="Ingrese su mensaje *"
                                                            helperText={<ErrorMessage name='message' />}
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Button
                                                            color={!mode ? 'secondary' : 'primary'}
                                                            fullWidth
                                                            type="submit"
                                                            variant="contained"
                                                            disabled={loading}
                                                        >
                                                            {loading ? 'Enviando' : 'Enviar'}
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )
                                    }
                                </Formik>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card >
                            <CardContent>
                                <Typography textAlign='center'>
                                    Puedes encontrarme en mis otras redes:
                                </Typography>
                            </CardContent>
                            <CardActions sx={{
                                justifyContent: 'center',
                            }}>
                                {
                                    networks.map(network => {
                                        return (
                                            <Link
                                                key={network.name}
                                                href={network.url}
                                                target="_blank"
                                                title={network.name}
                                            >
                                                <IconButton
                                                    size='large'
                                                    color={mode ? 'secondary' : 'primary'}
                                                >
                                                    {network.icon}
                                                </IconButton>
                                            </Link>
                                        )
                                    })
                                }
                            </CardActions>
                            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Avatar
                                    sx={{ objectFit: 'fill', margin: '0 1rem' }}
                                    src={'http://purecatamphetamine.github.io/country-flag-icons/3x2/AR.svg'} />
                                <FavoriteIcon color={mode ? 'secondary' : 'primary'} />
                                <Avatar
                                    sx={{ objectFit: 'fill', margin: '0 1rem' }}
                                    src={'http://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg'} />
                            </CardContent>
                        </Card>


                    </Grid>

                </Grid>

            </Container>

        </Box >
    );
}
export default ContactMe