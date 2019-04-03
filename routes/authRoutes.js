const express = require ('express')
const User = require('../models/user.js')
const authRouter = express.Router()
const jwt = require ('jsonwebtoken')

authRouter.post('/signup', (req, res, next)=>{
  // Does a user exist by the submitted username already exists 
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
      if(err){
        res.status(500)
        return next(err)
      }
      // Does a user already exist
      if(user){
          res.status(400)
          return next(new Error("That username already exists!"))
      }

      //Create the user, then send the user object and JWT token to the front-end
      const newUser = new User(req.body)
      newUser.save((err, savedUser) => {
          if(err){
            res.status(500)
            return next(err)
          }
          const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
          return res.status(201).send({user: savedUser.toObject(), token})
      })

  })
})

authRouter.post("/login", (req, res, next) => {
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
          res.status(500)
          return next(err)
        }

        //Does the user not exist or does the existing user's password not match the requesting password
        if(!user || user.password !== req.body.password){
          res.status(403)
          return next(new Error("Username or Password are incorrect!"))
        }

        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(200).send({user: user.toObject, token})
  })
})
module.exports = authRouter