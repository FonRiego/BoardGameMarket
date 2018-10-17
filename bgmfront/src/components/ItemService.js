import axios from 'axios';

class ItemService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:3000/api/item",
      withCredentials: true
    });
  }

  findProfileItems = () => {
    return this.service.get("/profile")
    .then(response => response.data)
  }

  deleteItem  = (itemId) => {
    return this.service.post("/delete", {itemId})
    .then(response => response.data)
  }



  // signup = (username, password, province, avatarName, avatarPath) => {
  //   return this.service.post('/signup', {username, password, avatarName, avatarPath})
  //   .then(response => response.data)
  // }

  // login = (username, password) => {
  //   return this.service.post('/login', {username, password})
  //   .then(response => response.data)
  // }

  // loggedin = () => {
  //   return this.service.get('/currentUser',)
  //   .then(response => response.data)
  // }

  // logout = () => {
  //   return this.service.get('/logout',)
  //   .then(response => response.data)
  // }


}

export default ItemService;