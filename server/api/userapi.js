const router = require('express').Router()
const {Users, gameDatabase} = require('../database')
const {Op} = require('sequelize')
const {OAuth2Client} = require("google-auth-library")

const client = new OAuth2Client(process.env.GOOGLE_CLIENTID)

// router.post('/auth', async (req, res) => {
// const { token } = req.body
//   const ticket = await client.verifyIdToken({
//     idToken: token,
//     audience: 'http://localhost:3000/'
//   })
//   const { name, email, picture } = ticket.getPayload()
//   res.status(201)
//   res.json({ name, email, picture })})

router.post('/:email', async (req, res) => {
    try {
      const user = await Users.findByPk(req.params.email)
      if(!user)
      {
          Users.create({email:req.params.email,gamesVotedOn:[]})
          res.send("true")
      }
      else{res.send("true")}}
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