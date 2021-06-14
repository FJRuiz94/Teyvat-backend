const mongoose = require('mongoose')

const BuildSchema = mongoose.Schema({
  title: { type: String, required: true},
  main: { type: String},
  member1: {type: String},
  member2: {type: String},
  member3: {type:String},
  feather: {type: String},
  flower: {type:String},
  hourglass: {type: String},
  goblet: {type: String},
  crown: {type: String},
  description: {type:String}

})

const Build = mongoose.model('build', BuildSchema)

module.exports = Build