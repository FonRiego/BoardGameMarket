import React from 'react';
import AuthService from './AuthService';
import { withRouter, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class Signup extends React.Component {
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
    const username = this.state.username;
    const password = this.state.password;


    this.service.signup(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
        this.props.getUser(response.user)
    })
    .then(() => {
      this.props.history.push("/profile");
    })
    .catch( error => alert(error))
  }

  handleClose() {
    this.setState({ show: false });
    this.props.history.push("/")
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }


  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose} className="modal-main" bsSize="large">
          <Modal.Header className="modal-header-footer" closeButton>
            <Modal.Title className="modal-header-text">Crea una nueva cuenta</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <div>
              <form className="modal-body" onSubmit={this.handleFormSubmit}>
                <fieldset>
                  <label>Nombre de usuario:</label>
                  <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
                </fieldset>
            
                <fieldset>
                  <label>Contraseña:</label>
                  <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
                </fieldset>

                <input type="submit" value="Regístrate" />

                <Link to="/login"><button className="modal-button">O Inicia sesión</button></Link>
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

export default withRouter(Signup);
