const router = require('express').Router()
const {ShooterGames} = require('../database')

router.get('/', async (req, res) => {
    try {
      const shootergames = await ShooterGames.findAll()
      res.send(shootergames)
    } catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router