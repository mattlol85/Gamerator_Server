const Sequelize = require("sequelize");
const gameDatabase = require("../database");

const User = gameDatabase.define('userTable', {
    userID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            notEmpty: true
        }
    }
})


modules.export = User