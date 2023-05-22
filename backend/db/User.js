const mongoos = require('mongoose')

let productSchema = new mongoos.Schema({
    name:String,
    email:String,
    password:String
})

module.exports = mongoos.model('users',productSchema);