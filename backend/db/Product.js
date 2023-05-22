const mongoos = require('mongoose')

let productUserSchema = new mongoos.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
});

module.exports = mongoos.model('products',productUserSchema);