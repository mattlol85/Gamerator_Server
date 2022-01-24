const Router = require('express').Router()

Router.use('/action', require('./actiongames'))
Router.use('/indie', require('./indiegames'))
Router.use('/adventure', require('./adventuregames'))
Router.use('/shooting', require('./shootinggames'))
Router.use('/rpg', require('./rpggames'))
Router.get('/', (req,res)=>{
    try {res.send("Welcome to the API level!")}
    catch(error){res.send(error.message)}
})
module.exports = Router