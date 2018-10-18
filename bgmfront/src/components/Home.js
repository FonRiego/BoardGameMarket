import React from 'react';
// import logo from './logo.svg';
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <div className="main-container">
    <p style={{height: 500, fontSize: 40}}>Aquí va un mensaje grande explicativo, intro a la página. 
      <br/>
      Después, dos cuadraditos con las dos opciones: 
      <br/>
      1.- Busca juegos a la venta --> va al dashboard principal, no necesario login.
      <br/>
      2.- Pon juegos a la venta --> 'Date de alta como usuario o egístrate para poder poner tus juegos a la venta' --> con los links a login y signup, igual que en la navbar arriba. Tras log, queda en '/' pero al estar ya registrado te lleva a profile, donde se podrá añadir juegos a la venta.
    </p>
    <Link to={"/board"}>
      <button style={{fontSize: 80}}>Ir al Mercado</button>
    </Link>
    </div>
  )
}