// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Item = require("../models/Item");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/bgmserver', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    _id: "5bbf54e4589ee6175ef6a286",
    username: "alice",
    password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
    avatarName: "",
    avatarPath: "/images/user_placeholder.png",
    followedItems: []
  },
  {
    _id:"5bbf54e4589ee6175ef6a287",
    username: "bob",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    avatarName: "",
    avatarPath: "/images/user_placeholder.png",
    followedItems: []
  },
  {
    _id:"5bbf5ebfa81554177979ead0",
    username:"fon",
    password:"$2b$10$cre2tVzxhr12J0qKA/NKTOK4JIAOq.JMoDel3E0Uat5l1B7FAsgfq",
    avatarName: "",
    avatarPath:"/images/user_placeholder.png",
    followedItems: []
  }

]

let items = [
  {
    name: "Catan",
    yearPublished: "1995",
    image_url: "https://cf.geekdo-images.com/original/img/A-0yDJkve0avEicYQ4HoNO-HkK8=/0x0/pic2419375.jpg",
    condition: "Bueno",
    price: 20.50,
    ownerUser: "5bbf54e4589ee6175ef6a286"
  },
  {
    name: "Pandemic",
    yearPublished: "2008",
    image_url: "https://cf.geekdo-images.com/original/img/j-pfXZ_0GmOowohzD_T6NDAWGSA=/0x0/pic1534148.jpg",
    condition: "Nuevo",
    price: 22.00,
    ownerUser: "5bbf54e4589ee6175ef6a286"
  },
  {
    name: "Dixit",
    yearPublished: "2008",
    image_url: "https://cf.geekdo-images.com/original/img/m74nctbYaqTy03r8s_i_KTyvbYQ=/0x0/pic3483909.jpg",
    condition: "Muy Bueno",
    price: 18.25,
    ownerUser: "5bbf54e4589ee6175ef6a287"
  },
  {
    name: "Carcassonne",
    yearPublished: "2000",
    image_url: "https://cf.geekdo-images.com/original/img/o4p6f88SGE899BTNMzTvERVWZ-M=/0x0/pic2337577.jpg",
    condition: "Como Nuevo",
    price: 14.00,
    ownerUser: "5bbf54e4589ee6175ef6a287"
  },  
  {
    name: "Through the Ages: A Story of Civilization",
    yearPublished: "2007",
    image_url: "https://cf.geekdo-images.com/original/img/xeBBIO9BN7HGMxQdTw5zk5Hxou8=/0x0/pic236169.jpg",
    condition: "Como Nuevo",
    price: 26.00,
    ownerUser: "5bbf5ebfa81554177979ead0"
  },
  {
    name:"7 Wonders Duel",
    yearPublished: "2015",
    image_url: "https://cf.geekdo-images.com/original/img/M6wL1YFgW-PsdtJ328m2QiJf1K8=/0x0/pic3376065.jpg",
    condition: "Nuevo",
    price: 17.50,
    ownerUser: "5bbf5ebfa81554177979ead0"
  }
]

User.create(users)
.then( () => {
  return Item.create(items)
})
.then(databaseCreated => {
  console.log("users and items created")
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})