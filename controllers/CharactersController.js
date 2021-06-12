'use strict'

const express = require('express')
const router = express.Router()
const { Mongoose } = require("mongoose")
const Character = require('../models/CharacterModel')

require("../modules/database")

router.route('/characters')
  .get(async (req, res) => {
    try {


      // if (!req.tokenData || req.tokenData.profile === 'user') {
      //   filterParams.enabled = true
      // }

      const characterList = await Character.find().exec()

      res.json(characterList)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

router.route('/characters/:name')
  .get(async(req,res) => {
    try{
      const searchParams = {
        name: req.params.name
      }

      const getCharacter = await Character.findOne(searchParams).exec()

      return res.json(getCharacter)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })
  

module.exports = router