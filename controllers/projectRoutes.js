// Express
const express = require('express')
const router = express.Router()
const mongoose = require('../db/connection.js')
const db = mongoose.connection

// Import Model/Schema
const Project = require('../models/projectMD.js')

// ===========CRUD======================

// Show All
router.get('/', async (req, res) =>{
    res.json(await Project.find({}))
})

// Create One
router.post('/new', async (req, res)=>{
    const newProject = await Project.create(req.body)
    res.json(newProject)
})

// Delete One
router.delete('/delete/:projectId', async (req, res)=>{
res.json(await Project.findByIdAndRemove(req.params.projectId))
})

// Update One
router.put('/update/:projectId', async (req, res)=>{
    res.json(await Project.findByIdAndUpdate(req.params.projectId, req.body, {new: true}))
})

module.exports = router