const mongoose = require('mongoose');
const { Schema } = mongoose;

const pictureSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    url: String,
})
module.exports = mongoose.model('Picture', pictureSchema);