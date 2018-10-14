import React from 'react'

// ESTA BARRA ES PAERA BUSCAR EN LA COLLECIÓN ITEMS; ES DECIR, PARA BUSCAR JUEGOS QUE LA GENTE YA HAYA SUBIDO

//HABRÁ QUE HACER  OTRA DIFERENTE PARA BUSCAR JUEGOS PARA AÑADIR DE MI BASE DE DATOS GRANDE O ADAPTAR ESTA PARA PODER USARLA EN AMBOS CASOS.

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryString: ""
    }
}

  handleSubmit() {
    let queryString = this.state.queryString;
    this.props.search(queryString); 
    this.setState({ queryString: "" });
  }

  handleInputChange = (string) => {
    this.setState({ queryString: string });
  }

  render() {
    let { queryString } = this.state.queryString;
    return (
      <form onSubmit = { this.handleSubmit }>
        <input
          placeholder = "¿Qué juego quieres buscar?"
          type = "text" 
          value = { queryString }
          onChange = { element => this.handleInputChange(element.currentTarget.value) }
        />
      </form>
    )
  }
}
