const mongoose = require('mongoose');
const { Schema } = mongoose;

const emojiSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    url: String,
}, { collection: 'emoji' })

module.exports = mongoose.model('Emoji', emojiSchema);