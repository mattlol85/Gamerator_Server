const Sequelize = require("sequelize");
const gameDatabase = require("../database");

const Games = gameDatabase.define('games', {
    gameName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{
            notEmpty: true
        }
    },
    genres: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    numScores: {
        type: Sequelize.BIGINT,
    },
    numVotes: {
        type: Sequelize.INTEGER,
    },
    ourScore: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    metaRating: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    userRating: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    },
    numUserRatings: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    esrbRating: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    releaseDate: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    website: {
        type:Sequelize.TEXT,
        allowNull: false,
    },
    subreddit: {
        type:Sequelize.TEXT,
        allowNull: false,
    },
    publisher: {
        type:Sequelize.STRING,
        allowNull: false,

    },
    developer: {
        type:Sequelize.STRING,
        allowNull: false,

    },
    platforms: {
        type:Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,

    },
    backgroundImg: {
        type:Sequelize.TEXT,
        allowNull: false,

    },
    images:{
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false

    }

})


    module.exports = Games