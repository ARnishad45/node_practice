const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true,
        min : 18,
        max : 100
    },
    work : {
        type : String,
        enum : ['chef', 'manager', 'waiter'],
        required : true
    },
    mobile : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String,
        required : true
    },
    salary : {
        type : Number
    }
})

//create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;