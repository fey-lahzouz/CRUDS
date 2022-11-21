const express = require('express')
const Book = require('../modules/book.js')
const router = express.Router()

router.get('/', async(req, res) => { // async -> not block the process
    //console.log('Get started')
    res.send('Get started')

    try {
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        res.send('Error ' + error)
    }
})
router.post('/', async(req, res) => { // async -> not block the process
    //console.log('Get started')
    res.send('Get started')

    try {
        const books = await Book.find()
        res.json(books)
    } catch (error) {
        res.send('Error ' + error)
    }
})

module.exports = router // export router module so it can be accessible in the app js