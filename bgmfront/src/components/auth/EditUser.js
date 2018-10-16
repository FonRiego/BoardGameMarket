import React from 'react';
import AuthService from './AuthService';
import { withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';

class EditUser extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: "", 
      password: "",
      show: true
    };
    this.service = new AuthService();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    let {username, password} = this.state
    let id = this.props.userInfo._id
    console.log(id)
    
    this.service.update(username, password, id)
    .then( response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response.user)
    })
    // .then ( e => {
    //   this.props.history.push("/board");
    //   //CUANDO TENGA PROFILE, SERÁ PROFILE Y NO "/"
    // })
    .catch( error => console.log(error))
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange = (event) => {  
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose} style={{color: "white"}} bsSize="large">
          <Modal.Header style={{backgroundColor: "blue"}} closeButton>
            <Modal.Title>Rellena los datos que quieras modificar</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{display: "flex", flexDirection: "column", flexWrap: "wrap", color: "blue"}}>
            <div style={{border: "1px solid red",  width:"500px"}}>
              <form onSubmit={this.handleFormSubmit}>
                <fieldset>
                  <label>Nombre de usuario:</label>
                  <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
                </fieldset>

                <fieldset>
                  <label>Contraseña:</label>
                  <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
                </fieldset>

            {/* FALTA AÑADIR SUBIR IMAGEN*/}
            
                <input type="submit" value="Edita" />
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

export default withRouter(EditUser);
