var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

const { check, validationResult } = require('express-validator/check');

var app = express();

// var logger = (req, res, next) => {
//     console.log('Logging')
//     next();
// }

// app.use(logger);

// Global Vars
app.use((req, res, next) => {
    res.locals.errors = null
    next()
})

// view tamplate engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// bodyParser Middeleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// set static path
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.render('index', {
//         name: 'Imran Khan',
//         email: 'emailofimran1992@gmail.com',
//         number: 1754099405  
//     });
// });


// For hosted Apache server
app.get('/index.php', (req, res) => {
    res.render('index', {
        name: 'Imran Khan',
        email: 'emailofimran1992@gmail.com',
        number: 1754099405  
    });
});

app.listen(3000, () => console.log('Server Started on port 3000'))