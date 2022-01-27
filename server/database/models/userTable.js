const Sequelize = require("sequelize");
const gameDatabase = require("../database");

const Users = gameDatabase.define('users', {
    email: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,

    },
    gamesVotedOn: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
    }
})


module.exports = Users