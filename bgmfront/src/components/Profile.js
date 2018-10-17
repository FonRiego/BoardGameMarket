import React from 'react';
import ItemService from './ItemService'
import {LittleItem} from './LittleItem'
import AddItem from './AddItem'


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownedItems: [],
      followedItems: []
    };
    this.service = new ItemService();
  }

  componentDidMount() {
    this.findProfileItems()
  }

  findProfileItems() {
    this.service.findProfileItems()
    .then( res => {
      this.setState ({
        ownedItems: res.ownedList,
        followedItems: res.followedList.followedItems
      })
      })
    .catch(e => console.log(e))
  }

    // createItem() {
  //   let {results} = this.state
  //   this.service.createItem()
  //   .then((itemCreted) => {
  //     results.push(itemCreted)
  //   })
  // }

  deleteItem(itemId) {
    this.service.deleteItem(itemId)
    .then( res => {
      this.findProfileItems()
      })
    .catch(e => console.log(e))

  }

  render() {
    let {ownedItems, followedItems} = this.state;
    let {userInfo} = this.props;
    return (
      <div>
        {/* s */}
        {/* <button>Pon un juego a la venta</button>  */}
        <AddItem />
        <p>Aquí tengo que poner el componente AddItem, un modal con el searchbar y un form para rellenar el resto de info</p>
        {/* Tendrá un link */}
        <h4>Juegos que tienes a la venta:</h4>
        <div style={{ border: "1px solid red", display: "flex", flexWrap: "wrap" }}>
          { ownedItems.map( (oneItemInfo, index) => <LittleItem 
          itemInfo = { oneItemInfo } 
          key = { index } 
          userInfo = { userInfo }
          deleteItem = { (itemId) => this.deleteItem(itemId) }
          />)}
        </div>

        <h4>Juegos que sigues:</h4>
        <div style={{ border: "1px solid red", display: "flex", flexWrap: "wrap" }}>
          { followedItems.map( (oneItemInfo, index) => <LittleItem itemInfo = { oneItemInfo } key = { index } userInfo = { userInfo }/>)}
        </div>

        


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


