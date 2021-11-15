import { Box, Container, Grid, Card, CardContent, TextField, Button } from '@mui/material/';
import Title from '../components/Title';
import { Formik, Form } from 'formik';
interface Values {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}
const ContactMe = () => {
    const initValues = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    }

    const onSubmit = (values: Values) => {
        console.log(values)
    }

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
                        <Formik initialValues={initValues} onSubmit={onSubmit}>
                            {
                                (props) => (
                                    <Form>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    label="Nombre"
                                                    placeholder="Ingrese su nombre *"
                                                    variant='outlined'
                                                    fullWidth
                                                    value={props.values.firstName}
                                                    name='firstName'
                                                    onChange={props.handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    label="Apellido"
                                                    placeholder="Ingrese su apellido *"
                                                    fullWidth
                                                    value={props.values.lastName}
                                                    name='lastName'
                                                    onChange={props.handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Email"
                                                    placeholder="Ingrese su email *"
                                                    fullWidth
                                                    type="Email"
                                                    //name='email'
                                                    {...props.getFieldProps('email')}
                                                    //value={props.initialValues.email}
                                                    onChange={props.handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    label="Mensaje"
                                                    placeholder="Ingrese su mensaje *"
                                                    fullWidth
                                                    multiline
                                                    rows={4}
                                                    //value={props.initialValues.message}
                                                    //name='message'
                                                    {...props.getFieldProps('message')}
                                                    onChange={props.handleChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    fullWidth
                                                    variant="contained"
                                                    type="submit">
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