const router = require('express').Router()
const {Games} = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const adventuregames = await Games.findAll({where:{genres:{[Op.contains]:["Adventure"]}}})
      res.send(adventuregames)}
      catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router