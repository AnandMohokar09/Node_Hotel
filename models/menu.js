const mongoose = require('mongoose');
const munuschema = new  mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    taste: {
        type:String,
        enum: ['sweet', 'spicy', 'sour']
    },
    is_drink:{
        type:Boolean,
        default: false
    },
    ingrediant:{
        type:[String],
        default:0
    },
    num_sales:{
        type:Number,
        default: 0
    }
});

const menu = mongoose.model('menu', munuschema);

module.exports = menu;