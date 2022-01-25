require ("dotenv").config();
const axios = require("axios")
const {ActionGames,IndieGames,AdventureGames,ShooterGames,RPGGames} = require("./models/gameTables");


const seedDatabase = async ()=>{

const actionList = (await axios.get(`https://api.rawg.io/api/games?genres=action&page_size=5&key=${process.env.GRAW_KEY}`)).data.results
const indieList = (await axios.get(`https://api.rawg.io/api/games?genres=indie&page_size=5&key=${process.env.GRAW_KEY}`)).data.results
const adventureList = (await axios.get(`https://api.rawg.io/api/games?genres=adventure&page_size=5&key=${process.env.GRAW_KEY}`)).data.results
const shooterList = (await axios.get(`https://api.rawg.io/api/games?genres=shooter&page_size=5&key=${process.env.GRAW_KEY}`)).data.results
const rpgList = (await axios.get(`https://api.rawg.io/api/games?genres=5&page_size=5&key=${process.env.GRAW_KEY}`)).data.results 
    console.log(`------------------\nFinished retreiving initial game data`)

for(let element of actionList){
        let temp = (await axios.get(`https://api.rawg.io/api/games/${element.id}?key=${process.env.GRAW_KEY}`)).data
        let arrImages= (await axios.get(`https://api.rawg.io/api/games/${element.id}/screenshots?key=${process.env.GRAW_KEY}`)).data.results
        arrImages = arrImages.map((element)=>element.image)
        await ActionGames.findOrCreate({where:{gameName:temp.name,tally:0,description:temp.description_raw,backgroundImg:temp.background_image,images:arrImages}})
    }
    console.log(`------------------\nFinished loading /action!`)
for(let element of indieList){
        let temp = (await axios.get(`https://api.rawg.io/api/games/${element.id}?key=${process.env.GRAW_KEY}`)).data
        let arrImages= (await axios.get(`https://api.rawg.io/api/games/${element.id}/screenshots?key=${process.env.GRAW_KEY}`)).data.results
        arrImages = arrImages.map((element)=>element.image)
        await IndieGames.findOrCreate({where:{gameName:temp.name,tally:0,description:temp.description_raw,backgroundImg:temp.background_image,images:arrImages}})
    }
    console.log(`------------------\nFinished loading /indie!`)
for(let element of adventureList){
        let temp = (await axios.get(`https://api.rawg.io/api/games/${element.id}?key=${process.env.GRAW_KEY}`)).data
        let arrImages= (await axios.get(`https://api.rawg.io/api/games/${element.id}/screenshots?key=${process.env.GRAW_KEY}`)).data.results
        arrImages = arrImages.map((element)=>element.image)
        await AdventureGames.findOrCreate({where:{gameName:temp.name,tally:0,description:temp.description_raw,backgroundImg:temp.background_image,images:arrImages}})
    }
    console.log(`------------------\nFinished loading /adventure!`)
for(let element of shooterList){
        let temp = (await axios.get(`https://api.rawg.io/api/games/${element.id}?key=${process.env.GRAW_KEY}`)).data
        let arrImages= (await axios.get(`https://api.rawg.io/api/games/${element.id}/screenshots?key=${process.env.GRAW_KEY}`)).data.results
        arrImages = arrImages.map((element)=>element.image)
        await ShooterGames.findOrCreate({where:{gameName:temp.name,tally:0,description:temp.description_raw,backgroundImg:temp.background_image,images:arrImages}})
    }
    console.log(`------------------\nFinished loading /shooter!`)
for(let element of rpgList){
        let temp = (await axios.get(`https://api.rawg.io/api/games/${element.id}?key=${process.env.GRAW_KEY}`)).data
        let arrImages= (await axios.get(`https://api.rawg.io/api/games/${element.id}/screenshots?key=${process.env.GRAW_KEY}`)).data.results
        arrImages = arrImages.map((element)=>element.image)
        await RPGGames.findOrCreate({where:{gameName:temp.name,tally:0,description:temp.description_raw,backgroundImg:temp.background_image,images:arrImages}})
    }
    console.log(`------------------\nFinished loading /rpg!\n------------------\nDone loading!`)
}
module.exports = seedDatabase
//gameName tally description trailer backgroundImg images