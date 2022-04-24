import { makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    alert: {
        marginBottom: "1rem",
        marginTop: "1rem"
    }
}));

function FlashMessage(props){
    if(!props.location.state || !props.location.state.flashMessage)
        return "";

    const classes = useStyles();

    return <div className={classes.alert}>
        <Alert severity={props.location.state.flashMessage.status}>
            {props.location.state.flashMessage.message}
        </Alert>
    </div>
}

export default FlashMessage;