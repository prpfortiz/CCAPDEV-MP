const db = require('../models/db.js');
const User = require('../models/UserModel.js');
const bcrypt = require('bcrypt');

const controller = {

    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function (req, res) {
        res.render('index');
    },

    postLogin: function (req, res) {
        // console.log('im called');  

        var username = req.body.username;
        var pw = req.body.pw;
        var staysigned = req.body.staysigned;
        db.findOne(User, { username: username }, '_id username pw', function (result) {
            if (result) {
                var user = {
                    _id: result._id,
                    pw: result.pw
                }

                bcrypt.compare(pw, user.pw, (err, result) => {
                    if (result) {
                        req.session._id = user._id;
                        if (staysigned) {
                            req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;
                        }
                        else {
                            req.session.cookie.maxAge = false;
                        }
                        res.redirect('/homepage');
                    }
                });
            }
            else {
                res.redirect('/');
                // console.log('User not found');
                // res.status(401);
                // res.end();
            }
        });
    },

    getAbout: function (req, res) {
        res.render('about');
    }
}

module.exports = controller;
