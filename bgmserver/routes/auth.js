const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, Error => {    
      if(Error) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}

router.post('/signup', (req, res, next) => {
  //VALORAR MÁS DATOS: EMAIL, ETC.
  const { username, password, avatarPath } = req.body;
  if (!username || !password){
    next(new Error('You must provide valid username and password'));
  }
  User.findOne({ username })
  .then( foundUser => {
    if (foundUser) throw new Error('Username already exists');
    const salt     = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    return new User({
      username,
      password: hashPass,
      avatarPath
    }).save();
  })
  .then( savedUser => login(req, savedUser))
  .then( user => res.json({ status: 'Signup & login successfull', user }))
  .catch(Error => next(Error));
});

// router.put('/update/:userId', (req, res, next) => {
//   const { username, password } = req.body
//   const { userId } = req.params
//   console.log(userId)
//   User.findOne({ username })
//   .then( foundUser => {
//     if (foundUser) throw new Error('Username already exists');
//     const salt     = bcrypt.genSaltSync(bcryptSalt);
//     const hashPass = bcrypt.hashSync(password, salt);
//     User.findByIdAndUpdate(userId, { username, password: hashPass }, { new: true })
//         .then((user) => res.status(200).json({ status: 'user updated', user }))
//   })
// });

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) next(new Error('Something went wrong')); 
    if (!theUser) next(failureDetails)

    login(req, theUser).then(user => res.status(200).json(req.user));
  })(req, res, next);
});

router.get('/currentuser', (req,res,next) => {
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
})


router.get('/logout', (req,res) => {
  console.log("entra")
  console.log(req.logout())
  req.logout();
  res.status(200).json({message:'logged out'})
});


router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})


module.exports = router;
