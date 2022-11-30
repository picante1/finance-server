import React, {useState, useEffect} from 'react'
import './App.css'
import Axios from "axios";
import Card from "./components/card";

function App() {

    const baseUrl = "http://localhost:8080/api/tutorials/"
    const [values, setValues] = useState();
    const [movimiento, setMovimiento] = useState();
    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }


    const handleClickButton = () => {
        Axios.post(`${baseUrl}`, {
            description: values.description,
            amount: values.amount,
            method: values.method,
            frecuency: values.frecuency,
        },{headers:{
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'OPTIONS, GET, POST, PUT',
                'Access-Control-Max-Age':2592000000,
        }
        }).then((response) =>{
            console.log(response)
        })
        fetch('http://localhost:8080/api/tutorials/')
            .then(res => res.json())
            .then(res => console.log(res));;
    }

    useEffect(() => {
        Axios.get(`${baseUrl}`,{
            headers:{
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'OPTIONS, GET, POST, PUT',
                'Access-Control-Max-Age':2592000000,
            }
        })
            .then((response)=>{
            setMovimiento(response.data)
        }).finally()
        }
    )

  return (
    <div className="App">
      <div className="container">
          <h1 className="title">Finance App</h1><br/>
          <h3>Añada un movimiento...</h3>
          <div className="register-box">
              <input className="register-input" type="text" name="description" placeholder="Descripcion del Movimiento" onChange={handleChangeValues}/>
              <input className="register-input" type="text" name="amount" placeholder="Monto" onChange={handleChangeValues}/>
              <input className="register-input" type="text" name="method" placeholder="Método" onChange={handleChangeValues}/>
              <input className="register-input" type="text" name="frecuency" placeholder="Frecuencia" onChange={handleChangeValues}/>
              <button className="register-button" onClick={handleClickButton}>Agregar</button>
          </div>
          <br/>
          <div className="cards">
              {typeof movimiento !== 'undefined' &&
                  movimiento.map((game) => {
                      return <Card id={game.id} description={game.description} amount={game.amount} method={game.method} frecuency={game.frecuency}></Card>;
                  })}
          </div>
      </div>
    </div>
  )
}

export default App
