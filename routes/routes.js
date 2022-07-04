const express = require(`express`);
const controller = require(`../controllers/controller.js`);
const registerController = require('../controllers/registerController.js');
const appController = require('../controllers/appController.js');
const { isPublic, isPrivate } = require('../middlewares/auth');
const app = express();

app.get(`/favicon.ico`, isPublic, controller.getFavicon);
app.get(`/`, isPublic, controller.getIndex);
app.post('/', isPublic, controller.postLogin);
app.get('/register', isPublic, registerController.getRegister);
app.post('/register', isPublic, registerController.postRegister);
app.get('/getCheckUsername', isPublic, registerController.getCheckUsername);
app.get('/homepage', isPrivate, appController.getHomepage);
app.get('/profile', isPrivate, appController.getProfile);
app.get('/editprofile', isPrivate, appController.getEditProfile);
app.post('/editprofile', isPrivate, appController.postEditProfile);
app.post('/addexpense', isPrivate, appController.postAddExpense);
app.get('/getexpenses', isPrivate, appController.getExpenses);
app.post('/editexpense', isPrivate, appController.postEditExpense);
app.delete('/deleteexpense/:id', isPrivate, appController.deleteExpense);
app.get('/signout', isPrivate, appController.getSignout);
// app.delete('/deleteaccount/:userid', appController.deleteAccount);')  // TODO: delete account
app.get('/about', isPrivate, controller.getAbout);
module.exports = app;
