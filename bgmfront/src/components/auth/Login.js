import React from 'react';
import AuthService from './AuthService'
import { withRouter, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
// import Popover from 'react-bootstrap/lib/Popover';
// import Tooltip from 'react-bootstrap/lib/Tooltip';

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
        <Modal show={this.state.show} onHide={this.handleClose} className="modal-main" bsSize="large">
          <Modal.Header className="modal-header-footer" closeButton>
            <Modal.Title className="modal-header-text">Inicia tu sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <div>
              <form className="modal-body" onSubmit={this.handleFormSubmit}>
                <fieldset>
                  <label>Nombre de usuario:</label>
                  <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                </fieldset>

                <fieldset>
                  <label>Contraseña:</label>
                  <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                </fieldset>

                <input type="submit" value="Inicia Sesión" />

                <Link to="/signup"><button className="modal-button">O Regístrate</button></Link>
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

export default withRouter(Login);