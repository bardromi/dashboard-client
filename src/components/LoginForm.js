import React from 'react';
import { Grid } from '@material-ui/core';
import LoginSelector from './LoginSelector';
import { IconButton } from '@material-ui/core';
import Add from '@material-ui/icons/AddCircle';


const LoginForm = ({ name, text, getDataAction, submitClicked }) => {
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <LoginSelector
                name={name}
                text={text}
                getDataAction={getDataAction}
                submitClicked={submitClicked}
            />
            <IconButton color="primary">
                <Add />
            </IconButton>
        </Grid>
    )
}

export default LoginForm;