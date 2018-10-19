import React from 'react';
import SearchBar from './SearchBar';
import ItemService from './ItemService'
import {LittleItem} from './LittleItem';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
    this.service = new ItemService();
  }
  
  componentWillMount(){
    let stringToSearch = ""
    this.getItems(stringToSearch);
  }

  getItems = (stringToSearch) => {
    return this.service.searchItems( stringToSearch )
      .then( results => {
        this.setState({ results })
      })
      .catch(e => console.log(e))
  }

  followAndUnfollow() {
    console.log("Item Followed or Unfollowed")
  }

  render() {
    let {results} = this.state;
    let {userInfo} = this.props;
  
    return(
      <div className="board-container">
        <SearchBar submitSearch = { stringToSearch => this.getItems(stringToSearch) }/>
        <div className="littleitems-board">
          { results.map( (oneItemInfo, index) => <LittleItem itemInfo = { oneItemInfo } key = { index } userInfo = { userInfo } handleChanges = {() => this.followAndUnfollow()}/>)}
        </div>
      </div>
    )
  }
}