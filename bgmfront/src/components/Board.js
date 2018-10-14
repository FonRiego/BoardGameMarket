import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
// import { Link } from 'react-router-dom';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.petition = axios.create({
      baseURL: 'http://localhost:3000/api/auth <<<<<XXXXXX CAMBIAR!!!!!>>>>>',
      withCredentials: false
    });
  }

  getItems = (queryString) => {
    return this.petition.get('/ruta del server que usaré', {queryString})
      .then( response => {
        this.setState({
          results: response.data, o de la manera que sea (data.data, por ejemplo)
        })
      })
  }

///USARÉ queryString para la petición AXIOS

  render() {
    return(
      <div>
        <p>Aquí va la searchBar</p>
        <SearchBar search={queryString =>this.getItems(queryString)}/>
        <div>
          <p>Aquí tengo que pintar this.state.results, un array, habrá que hace un map de un componente Item, pasándole la información de ese array. Cada componente Item tendrá un link que abrirá una ventana a la info más detallada del juego. Hay que ver cómo hacer eso, algo tipo alert, un modal quizá o algo así.</p>
          <ul>
            <li>Juego 1</li>
            <li>Juego 2</li>
            <li>Juego 3</li>
            <li>Juego 4</li>
            <li>Juego 5</li>          
          </ul>
          <p>Por lo tanto, con la barra de búsqueda haré una petición axios hacia el server(tendré que guardar probablemente en el state el string de la búsqueda), que hará una búsqueda en la DB de Mongo, me devolverá un JSON con los resultados.
          Aquí, dentro de una lista renderizaré un componente Item, con los datos de cada juego, y los desplegaré en una lista. Tendré que hacer un map supongo. Ver ejemplo de nutrition, countries o beers.
          Probablemente tenga que guardar ese Jason en el state...o utilizarlo tal cuál según venga de las props, no sé... </p>
        </div>
      </div>
    )
  }
}