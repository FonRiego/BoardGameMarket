import React from 'react';
import AddGameForm from './AddGameForm'
import { Link, Switch, Route, Router } from 'react-router-dom';



export default class LittleGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: this.props.gameInfo.name.text
      // datos del juego para enviar
    };
  }

  render() {
    let {yearpublished, image_url} = this.props.gameInfo
    let name = this.props.gameInfo.name.text
    return (
      <div>
        <div style={{ border: "1px solid red", display: "flex" }}>
          <div style={{ width: 120 }}>
            <img src={image_url} alt={ name } width="100px"/>
          </div>
          <div style={{ width: 120 }}>
            <h4> { name.text }</h4> 
            <p>Año de publicación: { yearpublished }</p>
            <AddGameForm name={ name } yearpublished = { yearpublished } image_url={ image_url } addedGame={() => {this.props.addedGame()}}/>
          </div>
        </div>

      </div>
    )
  }
}




