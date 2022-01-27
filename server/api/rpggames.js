const router = require('express').Router()
const {Games, gameDatabase } = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const rpggames = await Games.findAll({where:{genres:{[Op.contains]:["RPG"]}}, order: gameDatabase.random() })
      res.send(rpggames)
    } catch (error) {
      res.send(error.message)
    }
  })
  router.get('/limit=:limit', async (req, res) => {
    try {
      var rpggames = await Games.findAll({where:{genres:{[Op.contains]:["RPG"]}}, order: gameDatabase.random() })
      rpggames.length = req.params.limit
      res.send(rpggames)}
      catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router