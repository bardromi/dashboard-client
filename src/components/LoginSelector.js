import React, { useState, useEffect } from 'react';
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


const LoginSelector = ({ text, getDataAction }) => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        (async function getData() {
            const list = await getDataAction();
            setList(list);
        })()
    })

    const handleFormChange = event => {
        setName(event.target.value);
    }

    return (
        <FormControl variant="outlined" className={classes.formControl} fullWidth={true}>
            <InputLabel>{text}</InputLabel>
            <Select
                onChange={handleFormChange}
                value={name}
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