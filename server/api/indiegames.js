const router = require('express').Router()
const {IndieGames} = require('../database')

router.get('/', async (req, res) => {
    try {
      const indiegames = await IndieGames.findAll()
      res.send(indiegames)
    } catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router