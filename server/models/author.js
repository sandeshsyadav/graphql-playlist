const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number
});

// making a collection of Author of Schema authorSchema
module.exports = mongoose.model('Author', authorSchema);