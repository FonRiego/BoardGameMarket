import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
//import Navbar from './components/Navbar';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
    })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  render() {
    this.fetchUser()

    if(this.state.loggedInUser){
    return (
      <div className="App">
        <header className="App-header">
          {/* <Navbar userInSession={this.state.loggedInUser} logout={this.logout} /> */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
    } else {
      return (
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {/* <Navbar userInSession={this.state.loggedInUser} logout={this.logout} /> */}
            <Switch>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            </Switch>
          </header>
        </div>
      );
    }
  }
}
