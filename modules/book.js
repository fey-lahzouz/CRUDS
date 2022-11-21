const moongose = require('moongose')


const bookSchema = new moongose.Schema({

    title:{
        type: String,
        required: true
    },
    author:{
        type:String,
        required:true
    }

})

module.exports = moongose.module('Book', bookSchema)