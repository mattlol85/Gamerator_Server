const router = require('express').Router()
const {Games, gameDatabase } = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const adventuregames = await Games.findAll({where:{genres:{[Op.contains]:["Adventure"]}}, order: gameDatabase.random() })
      res.send(adventuregames)}
      catch (error) {
      res.send(error.message)
    }
  })
  router.get('/limit=:limit', async (req, res) => {
    try {
      var adventuregames = await Games.findAll({where:{genres:{[Op.contains]:["Adventure"]}}, order: gameDatabase.random() })
      adventuregames.length = req.params.limit
      res.send(adventuregames)}
      catch (error) {
      res.send(error.message)
    }
  })
  module.exports = router