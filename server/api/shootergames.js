const router = require('express').Router()
const {Games} = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const shootergames = await Games.findAll({where:{genres:{[Op.contains]:["Shooter"]}}})
      res.send(shootergames)
    } catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router