const express = require("express")
require("dotenv").config()
const main = require("./router/main")
const DB = require("./models/dbConnect")

DB()

const app = express()

app.use(express.json())

const port = process.env.port || 8000

app.listen(port, ()=>{console.log(`I am listen on ${port}`)})

app.use("/api", main)