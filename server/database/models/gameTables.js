const Sequelize = require("sequelize");
const gameDatabase = require("../database");

const ActionGames = gameDatabase.define('actiongames', {
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
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    backgroundImg: {
        type:Sequelize.TEXT,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    images:{
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    }
})
const IndieGames = gameDatabase.define('indiegames', {
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
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    backgroundImg: {
        type:Sequelize.TEXT,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    images:{
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    }
})
const AdventureGames = gameDatabase.define('adventuregames', {
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
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    backgroundImg: {
        type:Sequelize.TEXT,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    images:{
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    }
})
const ShooterGames = gameDatabase.define('shootergames', {
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
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    backgroundImg: {
        type:Sequelize.TEXT,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    images:{
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    }
})
const RPGGames = gameDatabase.define('rpggames', {
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
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    backgroundImg: {
        type:Sequelize.TEXT,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    images:{
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    }
})

    module.exports = {ActionGames,IndieGames,AdventureGames,ShooterGames,RPGGames}