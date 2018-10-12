import React from 'react';
import AuthService from './AuthService';
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      username: "", 
      password: "",
      province: ""
    };
    this.service = new AuthService();
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
      this.props.history.push("/");
      //CUANDO TENGA PROFILE, SERÁ PROFILE
    })
    .catch( error => console.log(error))
    
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    return(
      <div>
        <h3>Welcome!, create your account:</h3>

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
              <option value="" selected disabled hidden>Choose here</option>
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
    )
  }
}

export default withRouter(Signup);
