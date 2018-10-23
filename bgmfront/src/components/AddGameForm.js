import React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import ItemService from './ItemService';

class AddGameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name, 
      yearpublished: this.props.yearpublished,
      image_url: this.props.image_url,
      price: "",
      condition: ""
    };
    this.service = new ItemService();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let {name, yearpublished, image_url, price, condition} = this.state
    this.service.addItem(name, yearpublished, image_url, price, condition)
    .then( () => this.props.history.push("/profile"))
    .catch(e => console.log(e))
    
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Button className="modal-item-button" bsStyle="primary" bsSize="large" onClick={this.handleShow}>   
          Añadir
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose} className="modal-main" bsSize="large">
          <Modal.Header className="modal-header-footer" closeButton>
            <Modal.Title className="modal-header-text">Añade las opciones para tu juego</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <div>
              <form className="modal-body" onSubmit={this.handleFormSubmit}>
                <fieldset>
                  <label>Precio:</label>
                  <input type="text" name="price" value={this.state.price} onChange={e => this.handleChange(e)} />
                </fieldset>
                <fieldset>
                  <label>Estado:</label>
                  <select name="condition" onChange={e => this.handleChange(e)}>
                    <option selected value="Elige una opción">Elige una opción</option>
                    <option value="Nuevo">Nuevo</option>
                    <option value="Como Nuevo">Como Nuevo</option>
                    <option value="Muy Bueno">Muy Bueno</option>
                    <option value="Bueno">Bueno</option>
                    <option value="Normal">Normal</option>
                    <option value="Malo">Malo</option>
                  </select>
                </fieldset>
                <input type="submit" value="Añade juego a la venta" className="modal-button"/>
              </form>
            </div>    
          </Modal.Body>
          <Modal.Footer className="modal-header-footer">
            <Button className="modal-button" onClick={this.handleClose}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );    
  }
}

export default withRouter(AddGameForm);
