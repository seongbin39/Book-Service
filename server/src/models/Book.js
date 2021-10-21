const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: { type: 'string', required: true},
    author: { type: 'string', required: true},
    summary: { type: 'string'},
    genre: { type: 'string'},
    release: { type: 'string', required: true},
    ISBN: { type: 'Number', required: true}
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book;