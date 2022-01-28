const Sequelize = require('sequelize')
//console.log("postgres://" + process.env.DB_USERNAME +":"+ process.env.DB_PASSWORD + "@"+ process.env.DB_HOSTNAME +"/capstone");
//const gameDatabase = new Sequelize("postgres://" + process.env.DB_USERNAME +":"+process.env.DB_PASSWORD + "@"+ process.env.DB_HOSTNAME +"/"+ process.env.DB_NAME,{logging : false})
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const gameDatabase = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    dialectOptions: {
        ssl: false
    }
});

module.exports = gameDatabase
