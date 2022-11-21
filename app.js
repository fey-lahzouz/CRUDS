const express = require('express')
const moongose = require('moongose')
const url = 'mongodb://localhost/Book'

const app = express() // start express framework

// connect to db
moongose.connect(url)
const con = moongose.connetion

con.on('open',  () => {
console.log('connection')
})

const bookRouter = require('../routes/books.js')
app.use('/books', bookRouter) // /middleware -> to all the books request send them to the bookRouter
app.listen(9000, () => {
    console.log('Server Running')
})