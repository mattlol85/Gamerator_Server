const router = require('express').Router()
const {RPGGames} = require('../database')

router.get('/', async (req, res) => {
    try {
      const rpggames = await RPGGames.findAll()
      res.send(rpggames)
    } catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router