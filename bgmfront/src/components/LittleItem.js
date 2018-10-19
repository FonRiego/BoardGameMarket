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
      <div className="littleitem-container">
        <div className="littleitem-left">
          <h4> {props.itemInfo.name}</h4> 
          <div className="item-img">
            <img src={props.itemInfo.image_url} alt={props.itemInfo.name} width="100px"/>
          </div>
        </div>
        <div className="littleitem-right">
          <p className="price">{props.itemInfo.price} €</p>
          <p>Publicado el: {itemPublishedDayReordered}</p>
          <Item itemInfo={props.itemInfo} userInfo = { props.userInfo } deleteItem={handleDeleteItem} profile={props.profile} handleChanges = {() => props.handleChanges()}/>
        </div>
      </div>
  )
}



