const express = require('express')
const moongose = require('moongose')
const url = 'mongodb://localhost/Book'

const app = express()

moongose.connect(url)
const con = moongose.connetion

con.on('open', function(){
console.log('connection')
})

app.listen(9000, function(){
    console.log('Server Running')
})