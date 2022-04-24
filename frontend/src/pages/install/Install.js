import { Box, Button, Container, Grid, MenuItem, Stepper, Step, StepLabel, Select, Typography } from "@material-ui/core";
import { useFormik } from "formik";

function Install(props){
    const steps = [
        "Choose a language",
        "E-commerce details",
        "Create admin account"
    ];

    const formik = useFormik({
        initialValues: {
            language: "en_US"
        }
    })

    return <Container>
        <Stepper alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
        <Grid container direction="column">
            <Grid item><Typography variant="h4">Choose a language</Typography></Grid>
            <Grid item>
                <form>
                    <Select value={formik.initialValues.language} name="language" onChange={formik.handleChange} variant="outlined" fullWidth>
                        <MenuItem value="en_US">English (US)</MenuItem>
                        <MenuItem value="pt_BR">Porguese (Brazil)</MenuItem>
                    </Select>
                </form>
            </Grid>
        </Grid>
        <Box mt={3}>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Button variant="contained">Previous</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary">Next</Button>
                </Grid>
            </Grid>
        </Box>
    </Container>;
}

export default Install;