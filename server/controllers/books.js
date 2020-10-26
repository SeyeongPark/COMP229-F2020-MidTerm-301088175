
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

// create a reference to the model
let Contact = require('../models/books');

module.exports.displayBookList = (req, res, next) => {
    Contact.find((err, books) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('book/list', 
            {title: 'Books', 
            BookList: bookList});      
        }
    }).sort({'Title': 1});
}

//page for Add book page
module.exports.displayAddPage = (req, res, next) => {
    //define 'books' for in details.ejs
    res.render('books/details', {title: 'Add Book', books: ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newBook = Book({
        "Title": req.body.Title,
        "Description": req.body.Description,
        "Price": req.body.Price,
        "Author": req.body.Author,
        "Genre": req.body.Genre,
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/books');
        }
    })
}