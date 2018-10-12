import React from 'react';
// import { Link } from 'react-router-dom';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  // }

  // handleLogout = (e) => {
  //   this.props.logout()
  // }

  render() {
    return(
      <div>
        <p>Aquí va la searchBar</p>
        <div>
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
        {/* if (this.state.loggedInUser) {
          return (
            <nav className="navbar">
              <img src={this.state.loggedInUser.avatarPath} alt=""></img>
              <h2>{this.state.loggedInUser.username}</h2>
              <Link to="/"><button onClick={this.handleLogout}>Log out</button></Link>
            </nav>
          )
        } else {
          return (
            <div>
              <nav className="navbar">
              <Link to="/signup"><button>Sign up</button></Link>
              <Link to="/login"><button>Log in</button></Link>
              </nav>
            </div>
          )
        } */}
      </div>
    )
  }
}