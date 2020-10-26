let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//page for Add book page
module.exports.displayAddPage = (req, res, next) => {
    //define 'books' for in details.ejs
    res.render('books/details', {title: 'Add Book', books: ''})          
}