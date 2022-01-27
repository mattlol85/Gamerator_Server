require('dotenv').config()
const express = require("express")
const app = express()
const port = 8080
const {gameDatabase,seedDatabase} = require("./database")
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./api/index'))

gameDatabase.sync().then(() => {seedDatabase()})
.then(()=>{
    console.log("Database synced!")
    app.listen(process.env.PORT || port, () => console.log(`Serving on port ${port}`))
})
