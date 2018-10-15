import React from 'react'

// ESTA BARRA ES PAERA BUSCAR EN LA COLLECIÓN ITEMS; ES DECIR, PARA BUSCAR JUEGOS QUE LA GENTE YA HAYA SUBIDO

//HABRÁ QUE HACER  OTRA DIFERENTE PARA BUSCAR JUEGOS PARA AÑADIR DE MI BASE DE DATOS GRANDE O ADAPTAR ESTA PARA PODER USARLA EN AMBOS CASOS.

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringToSearch: "",
    };
  }

  // handleSubmit() {
  //   let stringToSearch = this.state.stringToSearch;
  //   console.log(this.state.stringToSearch)

  //   this.props.search(stringToSearch); 
  //   this.setState({ stringToSearch: "" });
  // }

  handleInputChange = (string) => {
    this.setState({ stringToSearch: string.target.value });
  }

  handleSubmit = () => {
    let {stringToSearch} = this.state
    this.props.submitSearch(stringToSearch)
  }

  render() {
    let {stringToSearch} = this.props;
    return (
      <div>
        <input
          style={{width: "400px"}}
          placeholder = "¿Qué juego quieres buscar?"
          type = "text" 
          value = { stringToSearch }
          onChange = { element => this.handleInputChange(element)}
        />
        <button onClick = { () => this.handleSubmit()}>Busca juegos a la venta</button>
      </div>
    )
  }
}
