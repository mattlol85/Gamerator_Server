const router = require('express').Router()
const {Games} = require('../database')
const {Op} = require('sequelize')

router.get('/', async (req, res) => {
    try {
      const adventuregames = await await Games.findAll({where:{genre:{[Op.contains]:["Adventure"]}}})
      .then((adventuregames) => {
      res.send(adventuregames)
    })} catch (error) {
      res.send(error.message)
    }
  })

  module.exports = router