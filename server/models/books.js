// File name: books.js
// Author's name : Seyeong Park
// StudentID : 301088175
// Web App name : Syeong's FB

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
