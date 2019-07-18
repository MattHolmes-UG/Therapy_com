const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    sentAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('message', messageSchema);