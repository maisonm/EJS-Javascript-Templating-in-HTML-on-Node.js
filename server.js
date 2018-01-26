const express = require('express');
app = express(),
   port = 3000;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
   res.render('pages/index');
});

app.get('/about', function(req, res) {
   res.render('pages/about');
})

app.use('/public', express.static('public'));

app.listen(port);
console.log('Magic is happening on: ' + port);