import React from 'react';
import AddGameForm from './AddGameForm'

export const LittleGame = (props) => {
  let {yearpublished, image_url} = props.gameInfo
  let name = props.gameInfo.name.text
  return (
    <div className="littleitem-container">
      <div className="littleitem-left">
          <div className="item-img">
            <img src={image_url} alt={ name } width="100px"/>
          </div>
      </div>
      <div className="littleitem-right">
        <h4> { name.text }</h4> 
        <p>Año de publicación: { yearpublished }</p>
        <AddGameForm name={ name } yearpublished = { yearpublished } image_url={ image_url } addedGame={() => {props.addedGame()}}/>
      </div>
    </div>
  )
  
}




