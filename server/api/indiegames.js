const router = require('express').Router()
const {Games} = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const indiegames = await Games.findAll({where:{genres:{[Op.contains]:["Indie"]}}})
      res.send(indiegames)}
      catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router

