import React from 'react'


export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stringToSearch: "",
    };
  }

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
      <div className="searchbar-container">
        <input
          className="searchbar-input"
          style={{width: "400px"}}
          placeholder = "¿Qué juego quieres buscar?"
          type = "text" 
          value = { stringToSearch }
          onChange = { element => this.handleInputChange(element)}
        />
        <button className="searchbar-button" onClick = { () => this.handleSubmit()}>Busca juegos!</button>
      </div>
    )
  }
}
