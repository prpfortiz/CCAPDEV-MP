const db = require('../models/db.js');
const User = require('../models/UserModel.js');
const Entry = require('../models/EntryModel.js');

const appController = {

    getHomepage: function (req, res) {
        username = req.query.username;
        var user = {
            fname: '',
            lname: '',
            bday: '',
            username: username
        }
        db.findOne(User, { username: username }, 'fname lname bday', function (result) {
            user.fname = result.fname;
            user.lname = result.lname;
            user.bday = result.bday;
        });
        res.render('homepage');
    },
    /*
    getProfile: function (req, res) {
        username = req.query.username;
        var user = {
            fname: '',
            lname: '',
            bday: '',
            username: username
        }
        db.findOne(User, { username: username }, 'fname lname bday', function (result) {
            user.fname = result.fname;
            user.lname = result.lname;
            user.bday = result.bday;
        });
        res.render('profile');
    }*/
}

module.exports = appController;
