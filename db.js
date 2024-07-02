const mongoose = require('mongoose');
require('dotenv').config();

//Mongodb connection url
// const mongoURL = process.en.MONGODB_LOCAL_URL;   //local db
const mongoURL = process.env.MONGODB_URL;

console.log('MONGODB_URL:', process.env.MONGODB_URL);


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