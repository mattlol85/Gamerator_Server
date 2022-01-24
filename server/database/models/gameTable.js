const Sequelize = require("sequelize");
const gameDatabase = require("../database");

const Games = gameDatabase.define('gameTable', {
    gameID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gameName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
            notEmpty: true
        }
    },
    tally: {
        type: Sequelize.INTEGER,
        autoIncrement: true
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },

  trailer: {
        type:Sequelize.TEXT,
        allowNull: false,
        validate: {
            isurl: true,
        }
    },

    backgroundIMG: {
        type:Sequelize.TEXT,
        allowNull: false,
        validate: {
            isurl: true,
        }
    },

    images:{
        type: Sequelize.ARRAY(TEXT),
        allowNull: false,
    }

    })


    modules.export = Games