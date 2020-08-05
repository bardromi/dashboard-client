import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

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


const LoginSelector = ({ list, value, handleFormChange, name, text }) => {
    const classes = useStyles();

    return (
        <FormControl variant="outlined" className={classes.formControl} fullWidth={true}>
            <InputLabel>{text}</InputLabel>
            <Select
                name={name}
                onChange={handleFormChange}
                value={value}
            >
                {
                    list.map(el => (
                        <MenuItem key={el} value={el}>{el}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default LoginSelector;