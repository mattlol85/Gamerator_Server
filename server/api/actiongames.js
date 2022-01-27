const router = require('express').Router()
const {Games, gameDatabase } = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const actiongames = await Games.findAll({where:{genres:{[Op.contains]:["Action"]}}, order: gameDatabase.random() })
      res.send(actiongames)}
      catch (error) {
      res.send(error.message)
    }
  })
router.get('/limit=:limit', async (req, res) => {
    try {
      var actiongames = await Games.findAll({where:{genres:{[Op.contains]:["Action"]}}, order: gameDatabase.random() })
      actiongames.length = req.params.limit
      res.send(actiongames)}
      catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router