import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            minHeight: '90vh',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        inputRight: {
            textAlign: 'right',
            alignContent: 'right'
        }
    }),
);

const Login = () => {
    const classes = useStyles();

    const [state, setstate] = useState({ desk: 1, position: 1 })
    const handleClick = event =>
        setstate({
            ...state,
            [event.target.name]: state[event.target.value]
        })

    const { desk, position } = state;

    return (
        <Grid
            container
            spacing={0}
            // direction="column"
            alignItems="center"
            justify="center"
            className={classes.container}
        >
            <Grid item xs={2}>
                <Typography variant="h4" align="center">התחברות</Typography>
                <FormControl className={classes.formControl} fullWidth={true}>
                    <InputLabel>בחר שולחן</InputLabel>
                    <Select name="desk">
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl} fullWidth={true}>
                    <InputLabel>בחר תפקיד</InputLabel>
                    <Select name="position">
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                    </Select>
                </FormControl>
                <Button size="large" color="primary" variant="contained" fullWidth={true}>
                    התחבר
                </Button>
            </Grid>

        </Grid>
    );
}

export default Login;