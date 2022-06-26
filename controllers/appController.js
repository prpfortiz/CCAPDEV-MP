const db = require('../models/db.js');
const User = require('../models/UserModel.js');
const Entry = require('../models/EntryModel.js');
var currUser = {
    fname: '',
    lname: '',
    bday: '',
    username: ''
};

const appController = {

    getHomepage: function (req, res) {
        if (req.query.username != undefined) {
            currUser.username = req.query.username;
        }
        console.log('in gethomepage');
        console.log(currUser);
        res.render('homepage');
    },
    
    getProfile: function (req, res) {
        console.log('in getprofile');
        console.log(currUser);
        db.findOne(User, { username: currUser.username }, 'fname lname bday', function (result) {
            currUser.fname = result.fname;
            currUser.lname = result.lname;
            currUser.bday = result.bday;
            res.render('profile', currUser);
        });
    },

    getEditProfile: function (req, res) {
        console.log('in geteditprofile');
        console.log(currUser);
        res.render('editprofile', currUser);
    },

    postEditProfile: function (req, res) {
        currUser.fname = req.body.fname;
        currUser.lname = req.body.lname;
        currUser.bday = req.body.bday;
        console.log('in posteditprofile after edit');
        console.log(currUser);
        db.updateOne(User, { username: currUser.username }, { fname: currUser.fname, lname: currUser.lname, bday: currUser.bday }, function (flag) {
            if (flag) {
                res.redirect('/profile')
            }
        });
    }
}

module.exports = appController;
