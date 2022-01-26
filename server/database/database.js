const Sequelize = require('sequelize')
//require('dotenv').config();


const gameDatabase = new Sequelize("postgres://matt:Eggs8585@127.0.0.1:5432/capstone",{logging : false})

module.exports = gameDatabase
