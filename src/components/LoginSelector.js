import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { setDropDownSelector } from '../actions/user.actions';

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


const LoginSelector = ({ name, text, getDataAction, submitClicked }) => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const value = useSelector(state => state.user[name])

    const [list, setList] = useState([]);

    useEffect(() => {
        (async function getData() {
            const list = await getDataAction();
            setList(list);
        })();
    }, [getDataAction, list]);

    const handleFormChange = event => {
        dispatch(setDropDownSelector(name, event.target.value));
    };

    return (
        <FormControl
            variant="outlined"
            className={classes.formControl}
            error={!value && submitClicked ? true : false}
        >
            <InputLabel>{text}</InputLabel>
            <Select
                onChange={handleFormChange}
                value={value || ''}
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