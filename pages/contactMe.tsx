import { Box, Container, Grid, Card, CardContent, TextField, Button, useTheme } from '@mui/material/';
import Title from '../components/Title';
import { Formik, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup'
interface ContactFields {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}
const ContactMe = () => {
    const initValues: ContactFields = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    }

    const onSubmit = async (
        values: ContactFields, onSubmitProps: FormikHelpers<ContactFields>
    ) => {
        await fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(values)
        })
        onSubmitProps.resetForm()
    }
    const validateSchema = Yup.object().shape({
        firstName: Yup.string().required("Este campo es requerido"),
        lastName: Yup.string().required("Este campo es requerido"),
        email: Yup.string().email("Ingrese un correo válido").required("Este campo es requerido"),
        message: Yup.string().required("Este campo es requerido"),
    })
    const { palette } = useTheme()
    const mode = palette.mode === 'dark'
    return (
        <Box
            component="section"
            id="contactme"
            sx={{
                minHeight: '100vh',
                px: 2,
                my: 5,
            }}>
            <Container
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Title size={1.5} title="Contáctame" />
                <Card>
                    <CardContent>
                        <Formik initialValues={initValues} onSubmit={onSubmit} validationSchema={validateSchema}>
                            {
                                ({ getFieldProps }) => (
                                    <Form>
                                        <Grid container spacing={2}>
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
                                                >
                                                    Enviar
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