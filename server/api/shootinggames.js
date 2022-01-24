const router = require('express').Router()
const {ShootingGames} = require('../database')

router.get('/', async (req, res) => {
    try {
      const shootinggames = await ShootingGames.findAll()
      res.send(shootinggames)
    } catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router