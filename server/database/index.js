const Sequelize = require('sequelize')
const seedDatabase = require('./databaseSeeder')
const myDatabase = require('./database')
const {ActionGames,IndieGames,AdventureGames,ShooterGames,RPGGames} = require("./models/gameTables");


module.exports = {
    myDatabase,seedDatabase,ActionGames,IndieGames,AdventureGames,ShooterGames,RPGGames
}