import React from 'react'

// ESTA BARRA ES PAERA BUSCAR EN LA COLLECIÓN ITEMS; ES DECIR, PARA BUSCAR JUEGOS QUE LA GENTE YA HAYA SUBIDO

//HABRÁ QUE HACER  OTRA DIFERENTE PARA BUSCAR JUEGOS PARA AÑADIR DE MI BASE DE DATOS GRANDE O ADAPTAR ESTA PARA PODER USARLA EN AMBOS CASOS.

export default class SearchBar extends React.Component {

  // handleSubmit() {
  //   let stringToSearch = this.state.stringToSearch;
  //   console.log(this.state.stringToSearch)

  //   this.props.search(stringToSearch); 
  //   this.setState({ stringToSearch: "" });
  // }

  handleInputChange = (element) => {
    this.props.typedString(element.target.value)
    // this.setState({ stringToSearch: string });
    // console.log(this.state.stringToSearch)
    // console.log(element)
  }

  // handleSubmit = () => {
  //   this.props.submitSearch()
  // }

  render() {
    let {stringToSearch} = this.props;
    return (
      <form>
        <input
          placeholder = "¿Qué juego quieres buscar?"
          type = "text" 
          value = {stringToSearch}
          onChange = { element => this.handleInputChange(element)}
        />
      </form>
    )
  }
}
