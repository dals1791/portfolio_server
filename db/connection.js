// ENV variables
require('dotenv').config()

// Connect to MongoDB and Mongoose
const mongoose = require('mongoose')
const {MONGODBURI} = process.env
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const DB = mongoose.connection;

mongoose.connect(MONGODBURI, config)

DB.on("open", () => console.log("You are connected to Mongo"))
  .on("close", () => console.log("You are disconnected to Mongo"))
  .on("error", (err) => console.log(err));

module.exports = mongoose;