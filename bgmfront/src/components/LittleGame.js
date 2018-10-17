import React from 'react';

export default class LittleGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // datos del juego para enviar
    };
  }

  render() {
    let {name, yearpublished, image_url} = this.props.itemInfo
    return (
        <div style={{border: "1px solid red", display: "flex"}}>
          <div style={{width: 120}}>
            <img src={image_url} alt={name.text} width="100px"/>
          </div>
          <div style={{width: 120}}>
            <h4> {name.text}</h4> 
            <p>Año de publicación: {yearpublished}</p>
            {/* <Item itemInfo={props.itemInfo} userInfo = { props.userInfo } deleteItem={handleDeleteItem}/> */}
          </div>
        </div>
    )
  }
}



