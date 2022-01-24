const express = require("express")
const app = express()
const port = 8080
const {myDatabase} = require("./database")
const cors = require("cors")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', require('./api/index'))

myDatabase.sync().then(() => {/*createDummyData()*/})
.then(()=>{
    console.log("Database synced!")
    app.listen(port, () => console.log(`Serving on port ${port}`))
})
