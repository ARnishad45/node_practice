const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name : {
        type : String
    },
    price : {
        type : Number
    },
    taste:{
        type : String,
        enum : ['sweet', 'sour', 'spicy'],
    },
    is_drink : {
        type : Boolean,
        default : false
    },
    ingredients: {
        type : [String],
        default : []
    },
    num_sales: {
        type : Number,
        default : 0
    }
})

const MenuItem = mongoose.model('MenuItem', MenuItemSchema);
module.exports = MenuItem;
