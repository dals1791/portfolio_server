// Connection
const mongoose = require('../db/connection.js')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    title: String,
    liveLink: String,
    github: String,
    description: String,
    frontendSkills: [String],
    backendSkills: [String]

})

const Project = mongoose.model('projects', projectSchema)

module.exports = Project