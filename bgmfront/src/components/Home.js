import React from 'react';
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <div className="main-container">
      <h2 className="home-header">Bienvenido a Board Game Market</h2>
      <div class="button-container">
        <Link to={"/board"}>
          <button className=""><p> Ve al mercado para ver qué juegos hay a la venta. </p></button>
        </Link>
      </div>
    </div>
  )
}