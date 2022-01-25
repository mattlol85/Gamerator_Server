const router = require('express').Router()
const {AdventureGames} = require('../database')

router.get('/', async (req, res) => {
    try {
      const adventuregames = await AdventureGames.findAll()
      .then((adventuregames) => {
      res.send(adventuregames)
    })} catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router