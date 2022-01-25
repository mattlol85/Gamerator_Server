const router = require('express').Router()
const {Games} = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const actiongames = await Games.findAll({where:{genre:{[Op.contains]:["Action"]}}})
      .then((actiongames) => {
      res.send(actiongames)
    })} catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router