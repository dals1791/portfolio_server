require('dotenv').config();
const express = require('express');
const logger= require('morgan');
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 4000

// Middleware
app.use(logger('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

// Controllers and endpoints
app.get('/', (req, res)=>{
    res.json("Hello World, server is running :)");
})
// Project Controller
const projectRouter = require('./controllers/projectRoutes.js');
app.use('/projects', projectRouter);


// Server listen
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))