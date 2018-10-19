import React from 'react';
import ItemService from './ItemService'
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      owned: false,
      followed: false,
      itemId: this.props.itemInfo._id
    };
    this.service = new ItemService();
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
      let {itemId} = this.state;
      let followedItems = this.props.userInfo.followedItems;

      if (ownerName === username) {
       this.setState({ owned: true })
      }
      if (followedItems.includes(itemId)) {
        this.setState({ followed: true})
      }
    }
  }

  followedOrNot() {
    let owned = this.state.owned
    let followed = this.state.followed;
    let ownerName = this.props.itemInfo.ownerUser.username;
    let profile = this.props.profile;
    if (!owned & !followed) {
      return <div><p>Propietario: { ownerName }</p><button style={{ color: "orange" }} onClick={() => this.followItem()} >Seguir Juego</button></div>
    } else if ( !owned & followed) {
      return <div><p>Propietario: { ownerName }</p><button style={{ color: "orange" }} onClick={() => this.unfollowItem()} >Dejar de seguir</button></div>
    } else if ( owned & !profile) {
      return <p>El juego es tuyo!</p>
    }
  }

  beAbleToDelete() {
    let profile = this.props.profile;
    if (profile) {
    return <button className="modal-itemchange-button" onClick={this.props.deleteItem} >Quita este juego de la venta</button>
    }
  }

  followItem() {
    let {itemId} = this.state;
    this.service.followItem(itemId)
    .then( res => {
      this.setState({ followed: true })
    })
   .then( () => {
      this.props.handleChanges()
    })
    .catch(e => alert("Inicia sesión para poder seguir"))
  }

  unfollowItem() {
    let {itemId} = this.state;
    this.service.unfollowItem(itemId)
    
    .then( res => {
      this.setState({ followed: false })
    })
    .then( () => {
      this.props.handleChanges()
    })
    .catch(e => console.log(e))
  }

  render() {

    let { name, yearpublished, condition, price, image_url } = this.props.itemInfo;
    let itemPublishedDayReordered = this.handleDate();
    // let owned = this.state.owned

    return (
      <div>
        <Button className="modal-item-button" bsStyle="primary" bsSize="large" onClick={this.handleShow}>   
          Ver más
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose} className="modal-main" bsSize="large">
          <Modal.Header className="modal-header-footer" closeButton>
            <Modal.Title className="modal-itemheader-text">{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body item-container">
            <div className="item-img">
              <img src={image_url} alt={name} width="250px"/>
            </div>
            <div className="item-info">
              <p className="item-price">Precio: {price} €</p>
              <p>Estado: {condition}</p>
              <p>Año de Publicación: {yearpublished}</p>
              <p>Puesto a la venta: {itemPublishedDayReordered}</p>
              {this.beAbleToDelete()}
              {/* { owned && <button className="modal-itemchange-button" onClick={this.props.deleteItem} >Quita este juego de la venta</button>} */}
              {this.followedOrNot()}
            </div>
          </Modal.Body>
          <Modal.Footer className="modal-header-footer">
            <Button className="modal-item-button" onClick={this.handleClose}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
