const Sequelize = require('sequelize')
const seedDatabase = require('./databaseSeeder')
const gameDatabase = require('./database')
const Games = require("./models/gameTable");


module.exports = {
    gameDatabase,seedDatabase,Games
}