'use strict'

const express = require('express')
const router = express.Router()
const { Mongoose } = require("mongoose")
const Build = require('../models/BuildModel')

require("../modules/database")

router.route('/builds')
  .get(async (req, res) => {
    try {


      // if (!req.tokenData || req.tokenData.profile === 'user') {
      //   filterParams.enabled = true
      // }

      const buildList = await Build.find().exec()

      res.json(buildList)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

router.route('/builds/:title')
  .get(async(req,res) => {
    try{
      const searchParams = {
        title: req.params.title
      }

      const getBuild = await Build.findOne(searchParams).exec()

      return res.json(getBuild)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  })
router.route('/builds/newBuild')
  .post(async(req,res) => {
    try{
      const searchParams = {
        title: req.params.title
      }

      const newBuild = await new Build(searchParams).save()

      res.status(201).json(newBuild)
    } catch (error){
      res.status(500).json({message: error.message})
    }
  })

module.exports = router