const Sequelize = require('sequelize')
//require('dotenv').config();


const gameDatabase = new Sequelize("postgres://postgres:123@localhost:5432/capstone",{logging : false})

module.exports = gameDatabase
