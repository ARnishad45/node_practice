const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());  // store all the data in req.body  
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Welcome to my hotel, How about your hotel?')
})


//importing routes
const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes);


app.listen(PORT, () => {
    console.log('Server is listening at http://localhost:3000')
})