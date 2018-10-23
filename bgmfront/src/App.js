import React from 'react';
import './stylesheets/scss/main.scss';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Navbar from './components/Navbar';
import Board from './components/Board';
import Home from './components/Home';
import Profile from './components/Profile'


class App extends React.Component {
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
    .then(() => {
      this.props.history.push("/")
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
        <div>
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
            <div className="main-container">
            <Switch>
                <Route exact path="/profile" component={() => <Profile userInfo={this.state.loggedInUser}/>}/>
                <Route exact path="/board" component={() => <Board userInfo={this.state.loggedInUser}/>}/>
              </Switch>
            </div>
            <footer className="App-footer">
              <p>&copy;2018 Board Game Market</p>
              <p>Powered by Board Game Geek</p>
            </footer>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
            <div className="main-container">
              <Switch>
                <Route exact path="/" component={Home} />,
                <Route exact path='/signup' component={() => <Signup getUser={this.getTheUser}/>}/>,
                <Route exact path='/login' component={() => <Login getUser={this.getTheUser}/>}/>,
                <Route exact path="/board" component={Board}/>
              </Switch>
            </div>
            <footer className="App-footer">
              <p>&copy;2018 Board Game Market</p>
              <p>Powered by Board Game Geek</p>
            </footer>
          </div>
        </div>
      );
    }
  }
}


export default withRouter(App);

