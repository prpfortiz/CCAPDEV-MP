var mongoose = require('mongoose');

var EntrySchema = new mongoose.Schema({
    user: {
        type: mongoose.ObjectId,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Entry', EntrySchema);
