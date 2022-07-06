const dotenv = require(`dotenv`);
const express = require(`express`);
const hbs = require(`hbs`);
const bodyParser = require(`body-parser`);
const routes = require(`./routes/routes.js`);
const db = require('./models/db.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set(`view engine`, `hbs`);
hbs.registerPartials(__dirname + `/views/partials`);

dotenv.config();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || 'localhost';

app.use(express.static(`public`));
app.use(session({
    secret: 'EASsz3xrBr',
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017' }),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: null }
}));
app.use(`/`, routes);

db.connect();

app.listen(port, hostname, function () {
    console.log(`Server is running at:`);
    console.log(`http://` + hostname + `:` + port);
});
