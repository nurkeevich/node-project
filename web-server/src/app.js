const express = require('express');

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello Express</h1>');
})

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'Tilek',
        },
        {
            name: 'Bermet'
        }
    ]);
})

// Goal. Update routes.
// 1. Setup about route to render a title with HTML
// 2 Setup a weather route to send back JSON
//   - Object with forecast and location strings
// 3. Test your work by visiting both in the browser


app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>');
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Bishkek',
        summary: 'Cloudly',
        temperature: 65
    });
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
    console.log('Server started on 3000');
}); 