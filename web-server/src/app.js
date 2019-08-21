const path = require('path');
const express = require('express');

const app = express()

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Tilek Kadyrov'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Tilek Kadyrov'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'hello this is help page rendering!'
    })
})

// listening part #3000 
app.listen(3000, () => {
    console.log('Server started on 3000');
}); 