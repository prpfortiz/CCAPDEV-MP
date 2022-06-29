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
        db.findOne(User, { username: username }, '_id username pw', function (result) {
            if (result) {
                var user = {
                    _id: result._id,
                    username: result.username,
                    pw: result.pw
                }

                bcrypt.compare(pw, user.pw, (err, result) => {
                    if (result) {
                        req.session._id = user._id;
                        req.session.username = user.username;
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
    }
}

module.exports = controller;
