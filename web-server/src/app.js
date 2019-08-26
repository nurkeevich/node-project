const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express()

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Tilek Kadyrov'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Tilek Kadyrov'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help page',
        name: 'Tilek Kadyrov'
    });
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Tilek Kadyrov',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Tilek Kadyrov',
        errorMessage: 'Page not found.'
    })
})

// listening part #3000 
app.listen(3000, () => {
    console.log('Server started on 3000');
})