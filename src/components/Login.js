import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Button, Typography } from '@material-ui/core';
import LoginSelector from './LoginSelector';
import { getDesks, getRoles } from '../MOCK';

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
    }),
);

const Login = () => {
    const classes = useStyles();

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
                <Typography variant="h4" color="primary" align="center">התחברות</Typography>
            </Grid>
            <Grid item xs={12}>
                <LoginSelector
                    text="בחר שולחן"
                    getDataAction={getDesks}
                />
            </Grid>
            <Grid item xs={12}>
                <LoginSelector
                    text="בחר תפקיד"
                    getDataAction={getRoles}
                />
            </Grid>
            <Grid item>
                <Button className={classes.button} size="large" color="primary" variant="contained" fullWidth={true}>
                    התחבר
                </Button>
            </Grid>
        </Grid>
    );
}

export default Login;