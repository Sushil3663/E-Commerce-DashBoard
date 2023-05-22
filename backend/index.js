const express = require('express')
const app = express()
const cors = require('cors')
require("./db/config")
const Product = require('./db/User')
app.use(express.json())
app.use(cors());
const AddProduct = require('./db/Product')


app.post("/register", async (req, resp) => {
    console.log(req.body)
    let data = new Product(req.body)
    let result = await data.save()
    result = result.toObject()
    delete result.password
    resp.status(200).send(result)
})

app.post('/login', async (req, res) => {
    if (req.body.email && req.body.password) {
        let user = await Product.findOne(req.body).select("-password")
        if (user) {
            res.send(user)
        }
        else {
            res.send({result:"No data Found"})
        }
    }
    else {
        res.send({result:"No data Found"})
    }
})

app.post('/add-product', async (req,resp)=>{
    let addproduct = new AddProduct(req.body)
    let result = await addproduct.save()
    resp.send(result)
})

app.get('/product',async(req,resp)=>{
    let data = await AddProduct.find()
    if(data.length>0){
    resp.send(data)
}
else{
    resp.send("No product Found")
}
})


app.delete('/product/:id',async(req,res)=>{
    const data = await AddProduct.deleteOne({_id:req.params.id})
    console.log(req.params.id)


    res.send(data)
})


app.get('/product/:id',async(req,res)=>{
    const data = await AddProduct.findOne({_id:req.params.id})
    console.log(data)
    if(data){
        res.send(data)
    }
    else{
        res.send("No Record with Id found")
    }
})


app.put('/product/:id', async(req,res)=>{
    let result = await AddProduct.updateOne(
        {_id:req.params.id},
        {
            $set:req.body
        })
        res.send(result)

})

app.get('/search/:key',async(req,res)=>{
    let result = await AddProduct.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {company:{$regex:req.params.key}}
        ]
    });
    res.send(result)

})

app.listen(5000, () => {
    console.log("server is listening to a port....")
})