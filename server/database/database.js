const Sequelize = require('sequelize')
//console.log("postgres://" + process.env.DB_USERNAME +":"+ process.env.DB_PASSWORD + "@"+ process.env.DB_HOSTNAME +"/capstone");
const gameDatabase = new Sequelize("postgres://" + process.env.DB_USERNAME +":"+process.env.DB_PASSWORD + "@"+ process.env.DB_HOSTNAME +"/"+ process.env.DB_NAME,{logging : false})
module.exports = gameDatabase
