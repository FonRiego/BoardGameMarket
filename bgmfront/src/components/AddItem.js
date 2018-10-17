// BORRAR ARCHIVO!!!!!!!!!!!!!!!!!










import React from 'react';
import ItemService from './ItemService'
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import SearchBar from './SearchBar';
import LittleGame from './LittleGame';
import AddGameForm from './AddGameForm'
import { Link, Switch, Route } from 'react-router-dom';
// import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
// import Popover from 'react-bootstrap/lib/Popover';
// import Tooltip from 'react-bootstrap/lib/Tooltip';

export default class AddItem extends React.Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      results: [],
      tooMuchResults: false,
      form: {}
      // datos del juego para enviar
    };
    this.service = new ItemService();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
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

  showForm () {
    console.log("hola")
  }


  render() {
    let {results, tooMuchResults} = this.state
    console.log(results)
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );
    // const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    // let { name, yearPublished, condition, price, image_url} = this.props.itemInfo;
    // let ownerName = this.props.itemInfo.ownerUser.username;
    // let itemPublishedDayReordered = this.handleDate();
    // let owned = this.state.owned

    return (
      <div>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>   
          Pon un juego a la venta
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} style={{color: "white"}} bsSize="large">

          <Modal.Header style={{backgroundColor: "blue"}} closeButton>
            <Modal.Title><p>Añade un juego a la venta usando el buscador</p></Modal.Title>
          </Modal.Header>
          <Modal.Body style={{backgroundColor: "orange", display: "flex", flexWrap: "wrap", color: "blue"}}>
            <SearchBar submitSearch = { stringToSearch => this.searchGames(stringToSearch) }/>

            { tooMuchResults ? 
            <p >Demasiados resultados, restringe más tu búsqueda</p> 
            :
            <div style={{ border: "1px solid red", display: "flex", flexWrap: "wrap" }}>
              { results.map( (oneGameInfo, index) => <LittleGame gameInfo = { oneGameInfo } key = { index } />)}
            </div>}


            {/* <h4>Popover in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={popover}>
                <a href="#popover">popover</a>
              </OverlayTrigger>{' '}
              here
            </p>

            <h4>Tooltips in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={tooltip}>
                <a href="#tooltip">tooltip</a>
              </OverlayTrigger>{' '}
              here
            </p> */}

          </Modal.Body>
          <Modal.Footer style={{backgroundColor: "blue"}}>
            <Button onClick={this.handleClose}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
