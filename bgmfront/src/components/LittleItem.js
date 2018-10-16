import React from 'react';
import Item from './Item';



export const LittleItem = ({itemInfo, userInfo}) => {
  let itemPublishedDate = itemInfo.created_at.slice(0, 10)
  let itemPublishedYear = itemPublishedDate.substr(0,4)
  let itemPublishedMonth = itemPublishedDate.substr(5,2)
  let itemPublishedDay = itemPublishedDate.substr(8,2)
  let itemPublishedDayReordered = itemPublishedDay + "-" + itemPublishedMonth + "-" + itemPublishedYear
  console.log(userInfo)
  return (
      <div style={{border: "1px solid red", display: "flex"}}>
        <div style={{width: 120}}>
          <h4> {itemInfo.name}</h4> 
          <img src={itemInfo.image_url} alt={itemInfo.name} width="100px"/>
        </div>
        <div style={{width: 120}}>
          <p>Precio: {itemInfo.price} €</p>
          <p>Publicado el: {itemPublishedDayReordered}</p>
          <Item itemInfo={itemInfo} userInfo = { userInfo }/>
        </div>
      </div>
  )
}



