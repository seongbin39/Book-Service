const mongoose = require('mongoose')
const book = require('./Book')

const userSchema = mongoose.Schema({
    name: { type: 'string', required: true, trim: true },
    age: { type: 'number', required: true},
    email: { type: 'string', required: true, trim: true },
    books: { type: 'array', required: true}
})

const User = mongoose.model('User', userSchema)
model.exports = User