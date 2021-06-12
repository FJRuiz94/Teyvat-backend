const mongoose = require('mongoose')

const CharacterSchema = mongoose.Schema({
  name: { type: String, required: true},
  img: { type: String},
  sentence: {type: String},
  element: {type: String},
  rarity: {type:Number},
  card: { type: String },
  lore: {type: Object},
})

const Character = mongoose.model('character', CharacterSchema)

module.exports = Character