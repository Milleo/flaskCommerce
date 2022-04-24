import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import axios from "axios";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
    login_container: {
        backgroundColor: "#999",
        height: "100vh"
    },
    login_title: {
        textAlign: "center"
    },
    login_icon: {
        marginLeft: "-2rem"
    },
    login_footer: {
        color: "#333333",
        fontSize: "0.75rem",
        textAlign: "center"
    }
}));

function Login(){
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            login: "",
            password: ""
        },
        onSubmit: (values) => {
            axios.post("/api/admin/login").then((data) => {
                console.log("OK");
            }).catch(() => {
                console.log("ERROR");
            });
        }
    })

    return <Grid className={classes.login_container} container justifyContent="center" alignItems="center">
        <Paper elevation={1}>
            <Box p={5}>
                <Box mb={5}>
                    <Grid container direction="row" spacing={2} justifyContent="center">
                        <Grid item><Avatar className={classes.login_icon}><LockTwoToneIcon /></Avatar></Grid>
                        <Grid item><Typography className={classes.login_title} variant="h4">Sign in</Typography></Grid>
                    </Grid>
                </Box>
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                    <Grid container direction="column" spacing={3}>
                        <Grid item>
                            <TextField name="login" variant="outlined" type="text" label="Login" />
                        </Grid>
                        <Grid item>
                            <TextField name="password" variant="outlined" type="password" label="Password" />
                        </Grid>
                        <Grid item>
                            <Button fullWidth variant="contained" color="primary" type="submit">Login</Button>
                        </Grid>
                        <Grid item>
                            <p className={classes.login_footer}>Powered by FlaskComerce v.0.1<sup>&reg;</sup></p>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Paper>
    </Grid>;
}

export default Login;