import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LoginSelector from './LoginSelector';
import { getDesks, getRoles } from '../MOCK';
import { loginUser } from '../actions/user.actions';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: "flex",
            minHeight: '90vh',
        },
        formControl: {
            minWidth: 300,
        },
        button: {
            minWidth: 300,
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
        <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            spacing={2}
            className={classes.container}
        >
            <Grid item xs={12}>
                <AccountCircleIcon className={classes.iconSize} color="primary" />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" color="primary" align="center">התחברות</Typography>
            </Grid>
            <Grid item xs={12}>
                <LoginSelector
                    name="desk"
                    text="בחר שולחן"
                    getDataAction={getDesks}
                    submitClicked={submitClicked}
                />
            </Grid>
            <Grid item xs={12}>
                <LoginSelector
                    name="role"
                    text="בחר תפקיד"
                    getDataAction={getRoles}
                    submitClicked={submitClicked}
                />
            </Grid>
            <Grid item>
                <Button className={classes.button} size="large" color="primary" variant="contained" fullWidth={true} onClick={onSubmit}>
                    התחבר
                </Button>
            </Grid>
        </Grid>
    );
}

export default Login;