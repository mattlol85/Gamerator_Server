const router = require('express').Router()
const {ActionGames} = require('../database')

router.get('/', async (req, res) => {
    try {
      const actiongames = await ActionGames.findAll()
      res.send(actiongames)
    } catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router