const Router = require('express').Router()
const {Games,gameDatabase} = require('../database')
const {Op} = require('sequelize')

Router.use('/action', require('./actiongames'))
Router.use('/indie', require('./indiegames'))
Router.use('/adventure', require('./adventuregames'))
Router.use('/shooter', require('./shootergames'))
Router.use('/rpg', require('./rpggames'))

Router.get('/', (req,res)=>{
    try {res.send("Welcome to the API level!")}
    catch(error){res.send(error.message)}
})


Router.get('/all', async (req, res) => {
    try {
      const games = await Games.findAll()
      .then((games) => {
      res.send(games)
    })} catch (error) {
      res.send(error.message)
    }
  })
Router.get('/fetch25', async (req, res) => {
    try {
      var rand = {action:[],indie:[],adventure:[],rpg:[],shooter:[]}
      const games = await Games.findAll({order : gameDatabase.random()})
        
      for(let element of games)
      {
        if(rand.action.length < 5 && element.genres.includes("Action")){rand.action.push(element);continue;}
        if(rand.indie.length < 5 && element.genres.includes("Indie")){rand.indie.push(element);continue;}
        if(rand.adventure.length < 5 && element.genres.includes("Adventure")){rand.adventure.push(element);continue;}
        if(rand.rpg.length < 5 && element.genres.includes("RPG")){rand.rpg.push(element);continue;}
        if(rand.shooter.length < 5 && element.genres.includes("Shooter")){rand.shooter.push(element);continue;}
      }
        res.send(rand)} 
        catch (error) {
      res.send(error.message)
    }
  })
module.exports = Router