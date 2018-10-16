import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import {LittleItem} from './LittleItem';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.service = axios.create({
      baseURL: 'http://localhost:3000/api/board',
    });
  }
  
  componentWillMount(){
    let stringToSearch = ""
    this.getItems(stringToSearch);
  }

  getItems = (stringToSearch) => {
    return this.service.post('/', { stringToSearch })
      .then( res => {
        let results = res.data
        this.setState({ results })
      })
      .catch(e => console.log(e))
  }


  render() {
    let {results} = this.state;
    let {userInfo} = this.props;
  
    return(
      <div>
        <SearchBar submitSearch = { stringToSearch => this.getItems(stringToSearch) }/>
        <div style={{ border: "1px solid red", display: "flex", flexWrap: "wrap" }}>
          {/* AQUÍ HAY QUE LLAMAR A UN COMPONENTE ITEM DENTRO DEL MAP Y PASARLE COMO PROPS CADA RESULT INDIVIDUAL */}
          { results.map( (oneItemInfo, index) => <LittleItem itemInfo = { oneItemInfo } key = { index } userInfo = { userInfo }/>)}
        </div>
      </div>
    )
  }
}