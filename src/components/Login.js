import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { getDesks, getRoles } from '../MOCK';
import { loginUser } from '../actions/user.actions';
import LoginForm from './LoginForm';



const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        container: {
            minHeight: '90vh',
        },
        button: {
            minWidth: 200,
        },
        iconSize: {
            fontSize: "60px"
        }
    }),
);

const Login = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const desk = useSelector(state => state.user.desk);
    const role = useSelector(state => state.user.role);

    const [submitClicked, setSubmitClicked] = useState(false);

    const onSubmit = () => {
        if (desk && role) {
            dispatch(loginUser());
            setSubmitClicked(false);
        } else {
            setSubmitClicked(true);
        }
    }

    console.log("isLoggedIn", isLoggedIn);

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={3}
                className={classes.container}
            >
                <Grid item xs={12}>
                    <AccountCircleIcon className={classes.iconSize} color="primary" />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" color="primary" align="center">התחברות</Typography>
                </Grid>
                <Grid item xs={12}>
                    <LoginForm name="desk"
                        text="בחר שולחן"
                        getDataAction={getDesks}
                        submitClicked={submitClicked} />
                </Grid>
                <Grid item xs={12}>
                    <LoginForm
                        name="role"
                        text="בחר תפקיד"
                        getDataAction={getRoles}
                        submitClicked={submitClicked}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button className={classes.button} size="large" color="primary" variant="contained" onClick={onSubmit}>
                        התחבר
                </Button>
                </Grid>
            </Grid>
        </div >
    );
}

export default Login;