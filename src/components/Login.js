import React, { useState, useEffect } from 'react';
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

    const [state, setstate] = useState({ desk: "", role: "" })
    const [desks, setDesks] = useState([]);
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        (async function getData() {
            const desks = await getDesks();
            setDesks(desks);
        })()
    }, [desks])

    useEffect(() => {
        (async function getData() {
            const desks = await getRoles();
            setRoles(desks);
        })()
    }, [roles])

    const handleFormChange = event => {
        setstate({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const { desk, role } = state;

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
                    list={desks}
                    name="desk"
                    value={desk}
                    handleFormChange={handleFormChange}
                    text="בחר שולחן"
                />
            </Grid>
            <Grid item xs={12}>
                <LoginSelector
                    list={roles}
                    name="role"
                    value={role}
                    handleFormChange={handleFormChange}
                    text="בחר תפקיד"
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