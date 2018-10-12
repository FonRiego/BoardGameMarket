import React from 'react';
// import logo from './logo.svg';
import { Link } from 'react-router-dom';
// import Signup from './components/auth/Signup';
// import Login from './components/auth/Login';
// import AuthService from './components/auth/AuthService';
// import Navbar from './components/Navbar';
// import Board from './components/Board';


export const Home = () => {
  return (
    <div className="main-container">
    <p style={{height: 500, fontSize: 40}}>Aquí va un mensaje grande explicativo, intro a la página. 
      <br/>
      Después, dos cuadraditos con las dos opciones: 
      <br/>
      1.- Busca juegos a la venta --> va al dashboard principal, no necesario login.
      <br/>
      2.- Pon juegos a la venta --> va a tu página de perfil, previo login. Si te logeas con el botón de arriba, o ya estás logueado, directamente a tu perfil.
    </p>
    <Link to={"/board"}>
      <button style={{fontSize: 80}}>Ir al Board</button>
    </Link>
    <button style={{fontSize: 80}}>Pon juegos a la venta</button>
    </div>
  )
}