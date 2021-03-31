const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    title: String,
    liveLink: String,
    github: String,
    
})