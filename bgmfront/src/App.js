import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter} from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Navbar from './components/Navbar';
import Board from './components/Board';
import {Home} from './components/Home';

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
              <p>Aquí pintaré el profile</p>
              {/* <Profile/> */}
            </div>
          </div>
          <Switch>
              <Route exact path="/home" key="r2" component={()=><Home/>} />,
              <Route exact path="/board" key="r3" component={()=><Board/>} />
          </Switch>
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
              <Router>
                <div>
                  <Route exact path="/home" key="r2" component={()=><Home/>} />,
                  <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>,
                  <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
                </div>
              </Router>
              <Home/>
            </div>
          </div>
        </div>
      );
    }
  }
}


export default withRouter(App);

