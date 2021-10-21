const express = require('express');
const BookRouter = express.Router()
const Book = require('../../models/Book')

BookRouter.get('/', async(req, res) => {
    const books = await Book.find()
    res.json({status: 200, books})
})

BookRouter.get('/:id', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if (err) throw err;
        res.json({status: 200, books})
    })
})

BookRouter.post('/', (req, res) => {
    console.log(`name: ${req.params.name}`)
    Book.findOne({ name: req.body.name, ISBN: false}, async(err, book) => {
        if (err) throw err;
        if (!book){
            const newBook = new Book(req.body);
            await newBook.save().then( () => {
                console.log('Saved done !!')
                req.json({ status:201, msg: 'New book created in DB !!', newBook})
            })
        }else{
            const msg = 'This book already exists in DB !!';
            console.log(msg)
            res.json({status: 204, msg})
        }
    })
})

BookRouter.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, book) => {
        if (err) throw err;
        res.json({status:204, msg: `book ${req.params.id} updated in DB !!`}, book)
    })
})

BookRouter.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id, (err, book) => {
        if (err) throw err;
        res.json({status: 204, msg: `book ${req.params.id} deleted in DB !!`})
    })
})

module.exports = BookRouter