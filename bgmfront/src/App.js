import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import AuthService from './components/auth/AuthService';
import Navbar from './components/Navbar';
import Board from './components/Board';
import {Home} from './components/Home';
import Profile from './components/Profile'
// import EditUser from './components/auth/EditUser';

// const Routes = () => {
//   return [
//     <Route exact path="/" key="r1" component={Home} />,
//     <Route exact path='/signup' component={() => <Signup getUser={this.getTheUser}/>}/>,
//     <Route exact path='/login' component={() => <Login getUser={this.getTheUser}/>}/>,
//     <Route exact path="/board" key="r2" component={() => <Board userInfo={this.state.loggedInUser}/>} />
//     // <Route exact path="/:itemId"
//   ]
// };

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
                {/* <Route exact path="/edituser" key="r3" component={() => <EditUser userInfo={this.state.loggedInUser} getUser={this.getTheUser}/>}/> */}
              </Switch>
            </div>
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
          </div>
        </div>
      );
    }
  }
}


export default withRouter(App);

