import { useState } from 'react';
import * as Yup from 'yup'
import { Formik, Form, ErrorMessage, FormikHelpers } from 'formik';
import { Box, Container, Button, Grid, Card, CardContent, TextField, useTheme } from '@mui/material/';
import Title from '../components/Title';
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
                minHeight: '50vh',
                px: 2,
                my: 5,
            }}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
                maxWidth="sm"
            >
                <Title size={2.5} title="Contáctame" />
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
                                            <Grid item xs={12} sm={6}>
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
                                            <Grid item xs={12} sm={6}>
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
            </Container>
        </Box >
    );
}
export default ContactMe