import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/AuthService';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] })
  }

  handleLogout = (e) => {
    this.props.logout()
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="navbar">
        <img href=""></img>
          <Link to="/">
            <button onClick={this.handleLogout}>Log out</button>
          </Link>
          <p>Para NavBar estás logado, {this.state.loggedInUser.username}</p>
        </nav>
      )
    } else {
      return (
        <div>
          <p>Para NavBar no estás logado</p>
          <nav className="navbar">
            <ul>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
            </ul>
          </nav>
        </div>
      )
    }
  }
}