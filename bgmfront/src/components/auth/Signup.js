import React from 'react';
import AuthService from './AuthService';
import { withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      username: "", 
      password: "",
      province: "",
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
    const province = this.state.province;

    this.service.signup(username, password, province)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            province: ""
        });
        this.props.getUser(response.user)
    }).then ( e => {
      this.props.history.push("/board");
      //CUANDO TENGA PROFILE, SERÁ PROFILE Y NO "/"
    })
    .catch( error => console.log(error))
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
        <Modal show={this.state.show} onHide={this.handleClose} style={{color: "white"}} bsSize="large">
          <Modal.Header style={{backgroundColor: "blue"}} closeButton>
            <Modal.Title>Crea una nueva cuenta</Modal.Title>
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

                <fieldset>
                  <label>Tu provincia:</label>
                  <select value={this.state.province} name="province" onChange={ e => this.handleChange(e)}>
                    <option value="" selected disabled hidden>Elige la provincia donde resides</option>
                    <option value="A Coruña">A Coruña</option>
                    <option value="Álava">Álava</option>
                    <option value="Albacete">Albacete</option>
                    <option value="Alicante">Alicante</option>
                    <option value="Almería">Almería</option>
                    <option value="Asturias">Asturias</option>
                    <option value="Ávila">Ávila</option>
                    <option value="Badajoz">Badajoz</option>
                    <option value="Islas Baleares">Islas Baleares</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Burgos">Burgos</option>
                    <option value="Cáceres">Cáceres</option>
                    <option value="Cádiz">Cádiz</option>
                    <option value="Cantabria">Cantabria</option>
                    <option value="Castellón">Castellón</option>
                    <option value="Ciudad Real">Ciudad Real</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Cuenca">Cuenca</option>
                    <option value="Gerona">Girona</option>
                    <option value="Granada">Granada</option>
                    <option value="Guadalajara">Guadalajara</option>
                    <option value="Guipúzcoa">Guipúzcoa</option>
                    <option value="Huelva">Huelva</option>
                    <option value="Huesca">Huesca</option>
                    <option value="Jaén">Jaén</option>
                    <option value="La Rioja">La Rioja</option>
                    <option value="Las Palmas">Las Palmas</option>
                    <option value="León">León</option>
                    <option value="Lérida">Lleida</option>
                    <option value="Lugo">Lugo</option>
                    <option value="Madrid">Madrid</option>
                    <option value="Málaga">Málaga</option>
                    <option value="Murcia">Murcia</option>
                    <option value="Navarra">Navarra</option>
                    <option value="Orense">Orense</option>
                    <option value="Palencia">Palencia</option>
                    <option value="Pontevedra">Pontevedra</option>
                    <option value="Salamanca">Salamanca</option>
                    <option value="Segovia">Segovia</option>
                    <option value="Sevilla">Sevilla</option>
                    <option value="Soria">Soria</option>
                    <option value="Tarragona">Tarragona</option>
                    <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
                    <option value="Teruel">Teruel</option>
                    <option value="Toledo">Toledo</option>
                    <option value="Valencia">Valencia</option>
                    <option value="Valladolid">Valladolid</option>
                    <option value="Vizcaya">Vizcaya</option>
                    <option value="Zamora">Zamora</option>
                    <option value="Zaragoza">Zaragoza</option>
                    <option value="Ceuta">Ceuta</option>
                    <option value="Melilla">Melilla</option>
                  </select>
                </fieldset>

            {/* FALTA AÑADIR SUBIR IMAGEN*/}
            
                <input type="submit" value="Sign up" />
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

export default withRouter(Signup);
