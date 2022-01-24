const router = require('express').Router()
const {AdventureGames} = require('../database')

router.get('/', async (req, res) => {
    try {
      const adventuregames = await AdventureGames.findAll()
      res.send(adventuregames)
    } catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router