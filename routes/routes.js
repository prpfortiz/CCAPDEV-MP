const express = require(`express`);
const controller = require(`../controllers/controller.js`);
const registerController = require('../controllers/registerController.js');
const appController = require('../controllers/appController.js');
const app = express();

app.get(`/favicon.ico`, controller.getFavicon);
app.get(`/`, controller.getIndex);
app.post('/', controller.postLogin);
app.get('/register', registerController.getRegister);
app.get('/getCheckUsername', registerController.getCheckUsername);
app.post('/register', registerController.postRegister);
app.get('/homepage', appController.getHomepage);
//app.get('/profile', appController.getProfile);
module.exports = app;
