const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MediaSchema = new Schema({
    title: String,
    imgUrl: String,
    description: String
})

const Media = mongoose.model('media', MediaSchema)
module.exports = Media
