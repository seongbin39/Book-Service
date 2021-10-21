const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
    title: { type: 'string', required: true, trim: true},
    author: { type: 'string', required: true, trim: true},
    summary: { type: 'string', trim: true},
    genre: { type: 'string'},
    release: { type: 'string', required: true, trim: true},
    ISBN: { type: 'Number', required: true, trim: true}
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book;