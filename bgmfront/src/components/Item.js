import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';

export default class Item extends React.Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      owned: false,
      followed: false
      // name: itemInfo.name
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleDate() {
    let itemPublishedDate = this.props.itemInfo.created_at.slice(0, 10);
    let itemPublishedYear = itemPublishedDate.substr(0,4);
    let itemPublishedMonth = itemPublishedDate.substr(5,2);
    let itemPublishedDay = itemPublishedDate.substr(8,2);
    return itemPublishedDay + "-" + itemPublishedMonth + "-" + itemPublishedYear;
  }

  componentWillMount() {
    if (this.props.userInfo) {
      let ownerName = this.props.itemInfo.ownerUser.username;
      let username = this.props.userInfo.username;
      // let followed = 
      if (ownerName === username) {
       this.setState({ owned: true })
      }
      // if ()
    }
  }

  render() {
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );
    // const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    let { name, yearPublished, condition, price, image_url} = this.props.itemInfo;
    let ownerName = this.props.itemInfo.ownerUser.username;
    let itemPublishedDayReordered = this.handleDate();
    let owned = this.state.owned

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>   
          Ver más...
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} style={{color: "white"}} bsSize="large">
          <Modal.Header style={{backgroundColor: "blue"}} closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor: "orange", display: "flex", flexWrap: "wrap"}}>
            <div>
              <img src={image_url} alt={name} width="250px"/>
            </div>
            <div style={{border: "1px solid red",  width:"500px"}}>
              <p>Precio: {price} €</p>
              <p>Estado: {condition}</p>
              <p>Año de Publicación: {yearPublished}</p>
              <p>Puesto a la venta: {itemPublishedDayReordered}</p>
              { owned && <button style={{ color: "orange" }} onClick={this.props.deleteItem} >Quita este juego de la venta</button>}
              { !owned && <p>Propietario: {ownerName}</p>}
              { !owned && <button style={{ color: "orange" }}>Seguir Juego</button>}
              


            </div>
           

            {/* <h4>Popover in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={popover}>
                <a href="#popover">popover</a>
              </OverlayTrigger>{' '}
              here
            </p>

            <h4>Tooltips in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={tooltip}>
                <a href="#tooltip">tooltip</a>
              </OverlayTrigger>{' '}
              here
            </p> */}

          </Modal.Body>
          <Modal.Footer style={{backgroundColor: "blue"}}>
            <Button onClick={this.handleClose}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
