const express = require('express')
const client = require('../../db/connection')
const controller = require('../controller/controller')
const router = express.Router()


router.get('/details',controller.getDetails)

router.get('/countDetails',controller.countDetails)

router.post('/details',controller.addDetails)

router.get('/details/:id',controller.findDetail)

router.patch('/details/:id',controller.updateDetail)

router.patch('/deleteDetails/:id',controller.deleteDetail)

module.exports=router