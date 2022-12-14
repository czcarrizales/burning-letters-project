const mongoose = require('mongoose')
const {Schema} = mongoose;

const letterSchema = new Schema({
    message: String,
    createdAt: {type: Date, default: Date.now}
})

const Letter = mongoose.model('Letter', letterSchema)

module.exports = Letter