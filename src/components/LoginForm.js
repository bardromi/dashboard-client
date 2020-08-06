import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import LoginSelector from './LoginSelector';
import { IconButton, Modal, Paper } from '@material-ui/core';
import Add from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        padding: theme.spacing(2, 4, 3),
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    },
}));

const LoginForm = ({ name, text, getDataAction, submitClicked }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <Grid container direction="row" justify="center" alignItems="center">
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Paper className={classes.paper} elevation={3}>
                    <h1>asdasdasdasdasda</h1>
                </Paper>
            </Modal>
            <LoginSelector
                name={name}
                text={text}
                getDataAction={getDataAction}
                submitClicked={submitClicked}
            />
            <IconButton color="primary" onClick={handleOpen}>
                <Add />
            </IconButton>
        </Grid>
    )
}

export default LoginForm;