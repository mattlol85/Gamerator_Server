const router = require('express').Router()
const {Games} = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const rpggames = await Games.findAll({where:{genres:{[Op.contains]:["RPG"]}}})
      res.send(rpggames)
    } catch (error) {
      res.send(error.message)
    }
  })
  router.get('/limit=:limit', async (req, res) => {
    try {
      var rpggames = await Games.findAll({where:{genres:{[Op.contains]:["RPG"]}}})
      rpggames.length = req.params.limit
      res.send(rpggames)}
      catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router