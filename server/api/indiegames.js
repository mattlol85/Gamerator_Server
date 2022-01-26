const router = require('express').Router()
const {Games} = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const indiegames = await Games.findAll({where:{genres:{[Op.contains]:["Indie"]}},order: [["id", "ASC"]]})
      res.send(indiegames)}
      catch (error) {
      res.send(error.message)
    }
  })
  router.get('/limit=:limit', async (req, res) => {
    try {
      var indiegames = await Games.findAll({where:{genres:{[Op.contains]:["Indie"]}},order: [["id", "ASC"]]})
      indiegames.length = req.params.limit
      res.send(indiegames)}
      catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router

