const db = require('../models/db.js');
const User = require('../models/UserModel.js');
const bcrypt = require('bcrypt');

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const registerController = {

    getRegister: function (req, res) {
        res.render('register');
    },

    getCheckUsername: function (req, res) {
        var username = req.query.username;

        db.findOne(User, { username: username }, 'username', function (result) {
            res.send(result);
        });
    },

    postRegister: function (req, res) {
        var fname = capitalize(req.body.fname);
        var lname = capitalize(req.body.lname);
        var bday = req.body.bday;
        var username = req.body.username;
        var pw = req.body.pw1;
        const saltRounds = 10;
        bcrypt.hash(pw, saltRounds, (err, hashed) => {
            var user = {
                fname: fname,
                lname: lname,
                bday: bday,
                username: username,
                pw: hashed
            }

            db.insertOne(User, user, function (flag) {
                if (flag) {
                    res.redirect('/');
                }
            })
        }); 
    }
}

module.exports = registerController;