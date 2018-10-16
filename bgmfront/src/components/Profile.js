import React from 'react';
import ItemService from './ItemService'
import {LittleItem} from './LittleItem'
// import AddItem from './AddItem'


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownedItems: []
    };
    this.service = new ItemService();
  }

  // createItem() {
  //   let {results} = this.state
  //   this.service.createItem()
  //   .then((itemCreted) => {
  //     results.push(itemCreted)
  //   })
  // }

  componentWillMount() {
    let userId = this.props.userInfo._id
    this.service.findOwnedItems(userId)
    .then( res => {
      this.setState({ ownedItems: res })
    })
    .catch(e => console.log(e))
    //búsqueda para rellenar results, es un find de items populando owneruser, en la que coincida el id del owneruser con el id del ususario, que lo recibimos via props en userInfo. Luego setState a results
  }


  render() {
    let {ownedItems} = this.state;
    let {userInfo} = this.props;
    return (
      <div>
        {/* s */}
        <button>Pon un juego a la venta</button> 
        <p>Aquí tengo que poner que cuando clique arriba, aparezca una searchbar para elegir juego, y cuando haga submit en la barra, un modal para rellenar el resto de info</p>
        {/* Tendrá un link */}
        <h4>Juegos que tienes a la venta:</h4>
        <div style={{ border: "1px solid red", display: "flex", flexWrap: "wrap" }}>
          { ownedItems.map( (oneItemInfo, index) => <LittleItem itemInfo = { oneItemInfo } key = { index } userInfo = { userInfo }/>)}
        </div>

        <h4>Juegos que sigues:</h4>




      </div>
        // <div style={{border: "1px solid red", display: "flex"}}>
        //   <div style={{width: 120}}>
        //     <h4> {itemInfo.name}</h4> 
        //     <img src={itemInfo.image_url} alt={itemInfo.name} width="100px"/>
        //   </div>
        //   <div style={{width: 120}}>
        //     <p>Precio: {itemInfo.price} €</p>
        //     <p>Publicado el: {itemPublishedDayReordered}</p>
        //     <Item itemInfo={itemInfo} userInfo = { userInfo }/>
        //   </div>
        // </div>
    )
  }
}


