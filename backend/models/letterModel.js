const mongoose = require('mongoose')
const {Schema} = mongoose;

const letterSchema = new Schema({
    message: String
})

const Letter = mongoose.model('Letter', letterSchema)

module.exports = Letter;