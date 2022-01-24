const Sequelize = require("sequelize");
const gameDatabase = require("../database");

const Users = gameDatabase.define('users', {
    userName: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})


module.exports = Users