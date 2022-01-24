const axios = require("axios")
const {ActionGames,IndieGames,AdventureGames,ShootingGames,RPGGames} = require("./models/gameTables");

const seedDatabase = async ()=>{
//assuming there are 5 game tables (for Action,Indie,Adventure,Shooting, and RPG)
const actionList = (await axios.get("https://api.rawg.io/api/games?genres=action&page_size=5&key=72b5a91b3a92453086806917704da93e")).data.results
const indieList = (await axios.get("https://api.rawg.io/api/games?genres=indie&page_size=5&key=72b5a91b3a92453086806917704da93e")).data.results
const adventureList = (await axios.get("https://api.rawg.io/api/games?genres=adventure&page_size=5&key=72b5a91b3a92453086806917704da93e")).data.results
const shootingList = (await axios.get("https://api.rawg.io/api/games?genres=shooting&page_size=5&key=72b5a91b3a92453086806917704da93e")).data.results
const rpgList = (await axios.get("https://api.rawg.io/api/games?genres=5&page_size=5&key=72b5a91b3a92453086806917704da93e")).data.results 

for(let element of actionList){
        let temp = (await axios.get(`https://api.rawg.io/api/games/${element.id}?key=72b5a91b3a92453086806917704da93e`)).data
        let arrImages= (await axios.get(`https://api.rawg.io/api/games/${element.id}/screenshots?key=72b5a91b3a92453086806917704da93e`)).data.results
        arrImages = arrImages.map((element)=>element.image)
        await ActionGames.findOrCreate({where:{gameName:temp.name,tally:0,description:temp.description_raw,backgroundImg:temp.background_image,images:arrImages}})
    }
for(let element of indieList){
        let temp = (await axios.get(`https://api.rawg.io/api/games/${element.id}?key=72b5a91b3a92453086806917704da93e`)).data
        let arrImages= (await axios.get(`https://api.rawg.io/api/games/${element.id}/screenshots?key=72b5a91b3a92453086806917704da93e`)).data.results
        arrImages = arrImages.map((element)=>element.image)
        await IndieGames.findOrCreate({where:{gameName:temp.name,tally:0,description:temp.description_raw,backgroundImg:temp.background_image,images:arrImages}})
    }
for(let element of adventureList){
        let temp = (await axios.get(`https://api.rawg.io/api/games/${element.id}?key=72b5a91b3a92453086806917704da93e`)).data
        let arrImages= (await axios.get(`https://api.rawg.io/api/games/${element.id}/screenshots?key=72b5a91b3a92453086806917704da93e`)).data.results
        arrImages = arrImages.map((element)=>element.image)
        await AdventureGames.findOrCreate({where:{gameName:temp.name,tally:0,description:temp.description_raw,backgroundImg:temp.background_image,images:arrImages}})
    }
for(let element of shootingList){
        let temp = (await axios.get(`https://api.rawg.io/api/games/${element.id}?key=72b5a91b3a92453086806917704da93e`)).data
        let arrImages= (await axios.get(`https://api.rawg.io/api/games/${element.id}/screenshots?key=72b5a91b3a92453086806917704da93e`)).data.results
        arrImages = arrImages.map((element)=>element.image)
        await ShootingGames.findOrCreate({where:{gameName:temp.name,tally:0,description:temp.description_raw,backgroundImg:temp.background_image,images:arrImages}})
    }
for(let element of rpgList){
        let temp = (await axios.get(`https://api.rawg.io/api/games/${element.id}?key=72b5a91b3a92453086806917704da93e`)).data
        let arrImages= (await axios.get(`https://api.rawg.io/api/games/${element.id}/screenshots?key=72b5a91b3a92453086806917704da93e`)).data.results
        arrImages = arrImages.map((element)=>element.image)
        await RPGGames.findOrCreate({where:{gameName:temp.name,tally:0,description:temp.description_raw,backgroundImg:temp.background_image,images:arrImages}})
    }
}
module.exports = seedDatabase
//gameName tally description trailer backgroundImg images