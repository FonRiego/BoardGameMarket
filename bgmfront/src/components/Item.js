import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';

export default class Item extends React.Component {
  constructor({itemProps}) {
    super({itemProps});

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      id: itemProps.itemInfo._id,
      name: itemProps.itemInfo.name,
      yearPublished: itemProps.itemInfo.yearPublished,
      condition: itemProps.itemInfo.condition,
      price: itemProps.itemInfo.price,
      image_url: itemProps.itemInfo.image_url,
      username: itemProps.itemInfo.ownerUser.username,
      province: itemProps.itemInfo.ownerUser.province,
      itemPublishedDate: itemProps.itemInfo.created_at.slice(0, 10)

    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
    let {id, name, yearPublished, condition, price, image_url, username, province, itemPublishedDate} = this.state;
    let itemPublishedYear = itemPublishedDate.substr(0,4)
    let itemPublishedMonth = itemPublishedDate.substr(5,2)
    let itemPublishedDay = itemPublishedDate.substr(8,2)
    let itemPublishedDayReordered = itemPublishedDay + "-" + itemPublishedMonth + "-" + itemPublishedYear

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
              <img src={image_url} alt={this.state.name} width="250px"/>
            </div>
            <div style={{border: "1px solid red",  width:"500px"}}>
              <p>Precio: {price} €</p>
              <p>Estado: {condition}</p>
              <p>Año de Publicación: {yearPublished}</p>
              <p>Usuario: {username}</p>
              <p>Puesto a la venta: {itemPublishedDayReordered}</p>
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
