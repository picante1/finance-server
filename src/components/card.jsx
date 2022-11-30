import React, { useState} from "react";
import "./card.css"
import FormDialog from "./dialog/dialog";
import axios from "axios";


const Card = (props) => {
    const [open, setOpen] = React.useState(false);

    const cardOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteGame = () => {
        axios.delete(`http://localhost:8080/api/tutorials/${props.id}`);
    }

    return (
        <>
        <FormDialog open={open} setOpen={setOpen} id={props.id} description={props.description} amount={props.amount} method={props.method} frecuency={props.frecuency} />
        <div className="game-card">
            <div className="info">
                <p><b>Descripción: </b> {props.description}</p>
                <p><b>Monto: </b>{props.amount}</p>
                <p><b>Método: </b>{props.method}</p>
                <p><b>Frecuencia: </b>{props.frecuency}</p>
            </div>
            <div className="actions">
                <button className="edit" onClick={cardOpen}>Editar Movimiento</button>
                <button className="delete" onClick={handleDeleteGame}>Eliminar</button>
            </div>
        </div>
        </>
    );
};

export default Card;
