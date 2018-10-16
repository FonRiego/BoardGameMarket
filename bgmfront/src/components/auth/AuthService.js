import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:3000/api/auth',
      withCredentials: true
    });
  }

  signup = (username, password, province, avatarName, avatarPath) => {
    return this.service.post('/signup', {username, password, avatarName, avatarPath})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentUser',)
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout',)
    .then(response => response.data)
  }

  // update = (username, password, id) => {
  //   return this.service.put(`/update/${id}`, { username, password })
  //   .then(response => response.data)
  // }

}

export default AuthService;