var mongoose = require('mongoose');

var EntrySchema = new mongoose.Schema({
    user: {
        type: String,
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
        type: String
    }
});

module.exports = mongoose.model('Entry', EntrySchema);
