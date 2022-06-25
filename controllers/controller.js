const db = require('../models/db.js');
const User = require('../models/UserModel.js');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function (req, res) {
        res.render('index');
    },

    postLogin: function (req, res) {
        var username = req.body.username;
        var pw = req.body.pw;
        db.findOne(User, { username: username }, 'pw', function (result) {
            if (result.pw == pw) {
                res.redirect('/homepage?username='+username);
            }
        });
    }
}

module.exports = controller;
