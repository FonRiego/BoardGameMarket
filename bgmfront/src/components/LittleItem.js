import React from 'react';
import Item from './Item';



export const LittleItem = (props) => {
  let itemPublishedDate = props.itemInfo.created_at.slice(0, 10)
  let itemPublishedYear = itemPublishedDate.substr(0,4)
  let itemPublishedMonth = itemPublishedDate.substr(5,2)
  let itemPublishedDay = itemPublishedDate.substr(8,2)
  let itemPublishedDayReordered = itemPublishedDay + "-" + itemPublishedMonth + "-" + itemPublishedYear

  let handleDeleteItem = () => {
    let itemId = props.itemInfo._id
    props.deleteItem(itemId)

  }
  return (
      <div style={{border: "1px solid red", display: "flex"}}>
        <div style={{width: 120}}>
          <h4> {props.itemInfo.name}</h4> 
          <img src={props.itemInfo.image_url} alt={props.itemInfo.name} width="100px"/>
        </div>
        <div style={{width: 120}}>
          <p>Precio: {props.itemInfo.price} €</p>
          <p>Publicado el: {itemPublishedDayReordered}</p>
          <Item itemInfo={props.itemInfo} userInfo = { props.userInfo } deleteItem={handleDeleteItem}/>
        </div>
      </div>
  )
}



