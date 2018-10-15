import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';



// export const LittleItem = (props) => {
//   let itemPublishedDate = props.itemInfo.created_at.slice(0, 10)
//   let itemPublishedYear = itemPublishedDate.substr(0,4)
//   let itemPublishedMonth = itemPublishedDate.substr(5,2)
//   let itemPublishedDay = itemPublishedDate.substr(8,2)
//   let itemPublishedDayReordered = itemPublishedDay + "-" + itemPublishedMonth + "-" + itemPublishedYear
//   return (
//     <Link to={`/${props.itemInfo._id}`} className="list-group-item list-group-item-action">
      // <div style={{border: "1px solid red", display: "flex"}}>
      //   <div style={{width: 160}}>
      //     <h4> {props.itemInfo.name}</h4> 
      //     <img src={props.itemInfo.image_url} alt={props.itemInfo.name} width="150px"/>
      //   </div>
      //   <div style={{width: 160}}>
      //     {/* <p>Año de Publicación: {props.itemInfo.yearPublished}</p> */}
      //     <p>Condición: {props.itemInfo.condition}</p>
      //     {/* <p>Propietario: {props.itemInfo.ownerUser.username}</p> */}
      //     {/* <p>Provincia: {props.itemInfo.ownerUser.province}</p> */}
      //     <p>Anuncio publicado el: {itemPublishedDayReordered}</p>
      //   </div>
      // </div>
//     </Link>
//   )
// }


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
    let {id, name, yearPublished, condition, image_url, username, province, itemPublishedDate} = this.state;
    let itemPublishedYear = itemPublishedDate.substr(0,4)
    let itemPublishedMonth = itemPublishedDate.substr(5,2)
    let itemPublishedDay = itemPublishedDate.substr(8,2)
    let itemPublishedDayReordered = itemPublishedDay + "-" + itemPublishedMonth + "-" + itemPublishedYear

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>   
          Ver más...
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} style={{color: "red"}}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>

            <h4>Popover in a modal</h4>
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
            </p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
