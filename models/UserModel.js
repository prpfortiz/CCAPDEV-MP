var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    bday: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    }/*,
    userID: {
        type: Number,
        required: true
    }*/
});

module.exports = mongoose.model('User', UserSchema);
