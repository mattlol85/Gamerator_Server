const Sequelize = require('sequelize')
const seedDatabase = require('./databaseSeeder')
const gameDatabase = require('./database')
const Games = require("./models/gameTable");
const Users = require("./models/userTable");


module.exports = {
    gameDatabase,seedDatabase,Games,Users
}