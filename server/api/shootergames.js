const router = require('express').Router()
const {Games, gameDatabase } = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const shootergames = await Games.findAll({where:{genres:{[Op.contains]:["Shooter"]}}, order: gameDatabase.random() })
      res.send(shootergames)
    } catch (error) {
      res.send(error.message)
    }
  })
  router.get('/limit=:limit', async (req, res) => {
    try {
      var shootergames = await Games.findAll({where:{genres:{[Op.contains]:["Shooter"]}}, order: gameDatabase.random() })
      shootergames.length = req.params.limit
      res.send(shootergames)}
      catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router