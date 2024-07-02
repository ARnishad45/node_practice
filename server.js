const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // store all the data in req.body  

app.get('/', function (req, res) {
  res.send('Welcome to my hotel, How about your hotel?')
})


//importing routes
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes);

app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000')
})