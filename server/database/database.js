const Sequelize = require('sequelize')

const myDatabase = new Sequelize("postgres://postgres:(ENTER PASSWORD HERE!)localhost:5432/campusdb",{logging : false})

module.exports = myDatabase
