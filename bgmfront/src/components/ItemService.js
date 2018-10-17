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

  searchItems = (stringToSearch) => {
    return this.service.post("/searchItems", {stringToSearch})
    .then(response => response.data)
  }

  searchGames = (stringToSearch) => {
    return this.service.post("/searchGames", {stringToSearch})
    .then(response => response.data)
  }

  addItem = (name, yearpublished, image_url, price, condition) => {
    return this.service.post("/addItem", {name, yearpublished, image_url, price, condition})
    .then(response => response.data)
  }
}

export default ItemService;