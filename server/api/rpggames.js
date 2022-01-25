const router = require('express').Router()
const {Games} = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const rpggames = await Games.findAll({where:{genre:{[Op.contains]:["RPG"]}}})
      
      res.send(rpggames)
    } catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router