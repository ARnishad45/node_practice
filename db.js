const mongoose = require('mongoose');

//Mongodb connection url
const mongoURL = "mongodb://localhost:27017/hotels";

//set up mongoose connection
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//get connection
const db = mongoose.connection;

//Define event listeners for database connection
db.on('connected', () => {
    console.log('Connected to mongodb server');
})

db.on('error', (err) => {
    console.log('Mongodb connection error', err);
})
db.on('disconnected', () => {
    console.log('Disconnected to mongodb server');
})

module.exports = db;