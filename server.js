require('dotenv').config()
const express = require('express')
const logger= require('morgan')
const app = express()

const {PORT} = process.env


// Middleware
app.use(logger('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
// Controllers and endpoints
app.get('/', (req, res)=>{
    res.json("Hello World, server is running :)")
})
// Server listen
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))