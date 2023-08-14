const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

// inizializations
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars'),
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Environments
app.use((req, res, next) => {
    next();
})
// routes
// app.use(require('./routes'))
app.use('/',require('./routes/links'))

// Public
app.use(express.static(path.join(__dirname, 'public')))


// starting the server
app.listen(app.get('port'),  (err) => {
    if(err) {
        console.log("There was an error : ", err);
    }
    console.log("server running on port ", app.get('port'));
})
