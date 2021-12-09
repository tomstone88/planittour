const express = require('express')
const router = express.Router()

//All performers route
router.get('/', (req, res) => {
    res.render('performers/index')
})

//New performer route
router.get('/new', (req, res) => {
    res.render('performers/new')
})

//Create performer route
router.post('/', (req, res) => {
    res.send('Create performer')
})


module.exports = router