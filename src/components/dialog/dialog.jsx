import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import axios from "axios";

export default function FormDialog(props) {
    const [editValues, setEditValues] = useState({
        id: props.id,
        description: props.description,
        amount: props.amount,
        method: props.method,
        frecuency: props.frecuency,
    });

    const handleEditValues = () => {
        console.log(props.baseUrl)
        axios.put(`http://localhost:8080/api/tutorials/${editValues.id}`, {
            description: editValues.description,
            amount: editValues.amount,
            method: editValues.method,
            frecuency: editValues.frecuency,
        });
        handleClose();
    }

    const handleDeleteGame = () => {
        axios.delete(`http://localhost:8080/api/tutorials/${editValues.id}`)
    }

    const handleChangeValues = (value)=>{
        setEditValues(prevValues=>({
                ...prevValues,
                [value.target.id]: value.target.value,
            })
        )
    }

    const handleClickOpen = () => {
        props.setOpen(true);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Editar</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="descripcion"
                        label="Descripcion"
                        defaultValue={props.description}
                        type="text"
                        onChange={handleChangeValues}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="monto"
                        label="Monto"
                        defaultValue={props.amount}
                        type="text"
                        onChange={handleChangeValues}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="metodo"
                        label="Metodo"
                        defaultValue={props.method}
                        type="text"
                        onChange={handleChangeValues}
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="frecuency"
                        label="Frecuencia"
                        defaultValue={props.frecuency}
                        type="text"
                        onChange={handleChangeValues}
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleEditValues}>Guardar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
