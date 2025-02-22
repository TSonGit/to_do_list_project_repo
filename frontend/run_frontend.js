const express = require('express');
const { name } = require('ejs');
const app = express();

const helper = require('../public/javascript/helper');

//Sets up the view for port 3000.
app.set('view engine', 'ejs');

//Serves static files from the public folder.
app.use(express.static('public'));

//Test if file can communicate with server: localhost:3000
app.get('/', (req, res) => {
    console.log('Ran for a test.');
    res.send('Ran from run_frontend.js');
})

app.get('/to-do_list', (req, res) => {
    console.log('Ran from .get for to-do_list.');
    res.render('list_display', { helper:helper });
    console.log('Past the render here!')
})

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });