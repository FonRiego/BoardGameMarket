import React from 'react';
// import AuthService from './AuthService'
import { withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
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
    // this.props.history.push("/")
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
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>   
          Añadir
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose} style={{color: "white"}} bsSize="large">
          <Modal.Header style={{backgroundColor: "blue"}} closeButton>
            <Modal.Title><p>Añade un juego a la venta usando el buscador</p></Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor: "orange", display: "flex", flexWrap: "wrap", color: "blue"}}>
            <div style={{border: "1px solid red",  width:"500px"}}>
          
              <form onSubmit={this.handleFormSubmit}>
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

                <input type="submit" value="Añade juego a la venta" />
              </form>
            </div>    
          </Modal.Body>
          <Modal.Footer style={{backgroundColor: "blue"}}>
            <Button onClick={this.handleClose}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );    
  }
}

export default withRouter(AddGameForm);
