const express = require(`express`);
const controller = require(`../controllers/controller.js`);
const registerController = require('../controllers/registerController.js');
const appController = require('../controllers/appController.js');
const app = express();

app.get(`/favicon.ico`, controller.getFavicon);
app.get(`/`, controller.getIndex);
app.post('/', controller.postLogin);
app.get('/register', registerController.getRegister);
app.post('/register', registerController.postRegister);
app.get('/getCheckUsername', registerController.getCheckUsername);
app.get('/homepage', appController.getHomepage);
app.get('/profile', appController.getProfile);
app.get('/editprofile', appController.getEditProfile);
app.post('/editprofile', appController.postEditProfile);
app.post('/addexpense', appController.postAddExpense);
module.exports = app;
