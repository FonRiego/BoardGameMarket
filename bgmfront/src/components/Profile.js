import React from 'react';
import ItemService from './ItemService'
import {LittleItem} from './LittleItem'
import AddItem from './AddItem'
import SearchBar from './SearchBar';
import LittleGame from './LittleGame';
import AddGameForm from './AddGameForm'


export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownedItems: [],
      followedItems: [],
      results: [],
      tooMuchResults: false
    };
    this.service = new ItemService();
  }

  componentDidMount() {
    this.findProfileItems()
  }

  searchGames = (stringToSearch) => {
    this.setState({tooMuchResults: false, results: []})
    return this.service.searchGames( stringToSearch )
      .then( results => {
        if (results.length >= 60) {
          this.setState ({tooMuchResults: true})
        } else { 
          this.setState({ results, tooMuchResults: false })
         }
      })
      .catch(e => console.log(e))
  }

  findProfileItems() {
    this.service.findProfileItems()
    .then( res => {
      this.setState ({
        ownedItems: res.ownedList,
        followedItems: res.followedList.followedItems
      })
      })
    .catch(e => console.log(e))
  }

  deleteItem(itemId) {
    this.service.deleteItem(itemId)
    .then( res => {
      this.findProfileItems()
      })
    .catch(e => console.log(e))
  }

  render() {
    let {ownedItems, followedItems, results, tooMuchResults} = this.state;
    let {userInfo} = this.props;
    return (
      <div>
        <h4>Busca un juego para poner a la venta</h4>
        <SearchBar submitSearch = { stringToSearch => this.searchGames(stringToSearch) }/>
        { tooMuchResults ? 
            <p >Demasiados resultados, restringe más tu búsqueda</p> 
            :
            <div style={{ border: "1px solid red", display: "flex", flexWrap: "wrap" }}>
              { results.map( (oneGameInfo, index) => <LittleGame gameInfo = { oneGameInfo } key = { index } />)}
            </div>}

        <h4>Juegos que tienes a la venta:</h4>
        <div style={{ border: "1px solid red", display: "flex", flexWrap: "wrap" }}>
          { ownedItems.map( (oneItemInfo, index) => <LittleItem 
          itemInfo = { oneItemInfo } 
          key = { index } 
          userInfo = { userInfo }
          deleteItem = { (itemId) => this.deleteItem(itemId) }
          />)}
        </div>

        <h4>Juegos que sigues:</h4>
        <div style={{ border: "1px solid red", display: "flex", flexWrap: "wrap" }}>
          { followedItems.map( (oneItemInfo, index) => <LittleItem itemInfo = { oneItemInfo } key = { index } userInfo = { userInfo } handleChanges = {() => this.findProfileItems()}/>)}
        </div>
      </div>
    )
  }
}


