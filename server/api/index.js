const Router = require('express').Router()

Router.get('/', (req,res)=>{
    try {res.send("Welcome to the API level!")}
    catch(error){res.send(error.message)}
})
module.exports = Router