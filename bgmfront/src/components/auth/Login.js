// auth/Signup.js
import React from 'react';
import AuthService from './AuthService'
import { withRouter, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';

class Login extends React.Component {
  constructor(props) {
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


    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
    this.props.history.push("/profile");
    //CUANDO TENGA PROFILE, SERÁ PROFILE Y NO "/""
  }

  handleClose() {
    this.setState({ show: false });
    this.props.history.push("/")
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
        <Modal show={this.state.show} onHide={this.handleClose} style={{color: "white"}} bsSize="large">
          <Modal.Header style={{backgroundColor: "blue"}} closeButton>
            <Modal.Title>Inicia tu sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{display: "flex", flexDirection: "column", flexWrap: "wrap", color: "blue"}}>
            <div style={{border: "1px solid red",  width:"500px"}}>
            <form onSubmit={this.handleFormSubmit}>
              <fieldset>
                <label>Nombre de usuario:</label>
                <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
              </fieldset>

              <fieldset>
                <label>Contraseña:</label>
                <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
              </fieldset>

              <input type="submit" value="Inicia Sesión" />
            </form>
            <Link to="/signup"><button>O Regístrate</button></Link>

            <h1>{this.state.error ? 'Error' : ''}</h1>
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

export default withRouter(Login);