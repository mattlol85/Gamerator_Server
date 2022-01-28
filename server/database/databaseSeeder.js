require ("dotenv").config();
const axios = require("axios");
const { emit } = require("nodemon");
const Games = require("./models/gameTable");


const seedDatabase = async ()=>{
    if(!await Games.findOne()){
var g = {genreIds:[4,51,3,5,2],genreNames:["Action","Indie","Adventure","RPG","Shooter"]}
var gameData;
for(let i = 0;i<5;i++)
{
for(let y = 1;y<3;y++)
{
gameData = (await axios.get(`https://api.rawg.io/api/games?key=${process.env.GRAW_KEY}&page_size=30&genres=${g.genreIds[i]}&page=${y}`)).data.results
for(let element of gameData)
{
    if(!await Games.findOne({where:{gameName:element.name}}))
    {
        let temp = (await axios.get(`https://api.rawg.io/api/games/${element.id}?key=${process.env.GRAW_KEY}`)).data
        let arrImages = element.short_screenshots.map((element)=>element.image)
        let arrPlatforms = temp.parent_platforms.map((element)=>element.platform.name)
        let arrGenres = temp.genres.map((element)=>element.name)
        await Games.findOrCreate({where:{
            gameName:temp.name,
            genres:arrGenres,
            numScores:0,
            numVotes:0,
            ourScore:0,
            description:temp.description_raw,
            metaRating:String(temp.metacritic),
            userRating:temp.rating,
            numUserRatings:temp.ratings_count,
            esrbRating:temp.esrb_rating?temp.esrb_rating.name:'',
            releaseDate:temp.released,
            website:temp.website,
            subreddit:temp.reddit_url,
            publisher:temp.publishers[0]?temp.publishers[0].name:'',
            developer:temp.developers[0]?temp.developers[0].name:'',
            platforms:arrPlatforms,
            backgroundImg:temp.background_image,
            images:arrImages.slice(1)}})
        }
    }
}
console.log(`------------------\nFinished loading ${g.genreNames[i]} chunk!`)
}
console.log(`------------------\nFinished loading!`)
    }
}
module.exports = seedDatabase
//gameName tally description trailer backgroundImg images