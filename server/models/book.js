const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String
});

// making a collection of Book of Schema bookSchema
module.exports = mongoose.model('Book', bookSchema);