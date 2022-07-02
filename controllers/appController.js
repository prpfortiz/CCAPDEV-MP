const db = require('../models/db.js');
const User = require('../models/UserModel.js');
const Entry = require('../models/EntryModel.js');

var currUser = {
    _id: '',
    fname: '',
    lname: '',
    bday: '',
    username: ''
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const appController = {

    getHomepage: function (req, res) {
        res.render('homepage');
    },

    getProfile: function (req, res) {
        currUser._id = req.session._id;

        db.findOne(User, { _id: currUser._id }, 'fname lname bday username', function (result) {
            currUser.fname = result.fname;
            currUser.lname = result.lname;
            currUser.bday = result.bday;
            currUser.username = result.username;
            res.render('profile', currUser);
        });
    },

    getEditProfile: function (req, res) {
        currUser._id = req.session._id;

        db.findOne(User, { _id: currUser._id }, 'fname lname bday username', function (result) {
            currUser.fname = result.fname;
            currUser.lname = result.lname;
            currUser.bday = result.bday;
            currUser.username = result.username;
            res.render('editprofile', currUser);
        });
    },

    postEditProfile: function (req, res) {
        currUser.fname = capitalize(req.body.fname);
        currUser.lname = capitalize(req.body.lname);
        currUser.bday = req.body.bday;
        db.updateOne(User, { username: currUser.username }, { fname: currUser.fname, lname: currUser.lname, bday: currUser.bday }, function (flag) {
            if (flag) {
                res.redirect('/profile')
            }
        });
    },

    // this works
    postAddExpense: function (req, res) {
        console.log('Current session: ' + req.session._id);

        var entry = new Entry();
        entry.user = req.session._id;
        // entry.user = req.body.id;
        entry.date = req.body.date;
        entry.amount = req.body.amount;
        entry.category = req.body.category;
        entry.notes = req.body.notes;
        db.insertOne(Entry, entry, function (flag) {
            // if (flag) {
            //     res.redirect('/profile');
            // }
            console.log(flag);
            res.redirect('/homepage');
        });
    }
}

module.exports = appController;
