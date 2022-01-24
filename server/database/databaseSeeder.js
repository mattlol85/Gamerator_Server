import axios from "axios";

const seedDatabase = async ()=>{
/*assuming there are 5 game tables (for Action,Indie,Adventure,Shooting, and RPG)*/
const actionList = await axios.get("https://api.rawg.io/api/games?genres=action&page_size=5&key=72b5a91b3a92453086806917704da93e").results
const indieList = await axios.get("https://api.rawg.io/api/games?genres=indie&page_size=5&key=72b5a91b3a92453086806917704da93e").results
const adventureList = await axios.get("https://api.rawg.io/api/games?genres=adventure&page_size=5&key=72b5a91b3a92453086806917704da93e").results
const shootingList = await axios.get("https://api.rawg.io/api/games?genres=shooting&page_size=5&key=72b5a91b3a92453086806917704da93e").results
const rpgList = await axios.get("https://api.rawg.io/api/games?genres=rpg&page_size=5&key=72b5a91b3a92453086806917704da93e").results


}