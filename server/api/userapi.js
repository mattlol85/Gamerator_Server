const router = require('express').Router()
const {Users, gameDatabase} = require('../database')
const {Op} = require('sequelize')

router.post('/:email', async (req, res) => {
    try {
      const user = await Users.findByPk(req.params.email)
      if(!user)
      {
          Users.create({email:req.params.email,gamesVotedOn:[]})
          res.send("Created a new user")
      }
      else{res.send("User already exists!")}}
      catch (error) {
      res.send(error.message)
    }
  })
  router.put('/:email/:game', async (req, res) => {
    try {
      const user = await Users.findByPk(req.params.email)
      if(user)
      {
          let i = Number(req.params.game)
          let arr = user.gamesVotedOn
          let arr2 = [...arr]
          if(!arr2[i])
          {
            arr2[i] = 1
            await user.update({gamesVotedOn:arr2})
            res.send(true)}
          else{
              res.send(false)
          }
      }
      else{res.send("User doesn't exist!")}}
      catch (error) {
      res.send(error.message)
    }
  })
module.exports = router