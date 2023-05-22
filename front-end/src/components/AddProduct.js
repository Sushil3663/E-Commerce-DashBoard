import React, { useState } from 'react'
import '../App.css'

const AddProduct = () => {
    const [name,setName] =useState("");
    const [price,setPrice] =useState(""); 
    const [category,setCategory] =useState("");
    const [company,setCompany] =useState("");
    const [error,setError] = useState(false);

    const addProduct = async() =>{

        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('user'))._id
        console.warn(name,price,category,company,userId)
        let result = await fetch("http://localhost:5000/add-product",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId} ),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        result = await result.json()
        console.log(result)
        

    }
    return (
        <div className='product'>
            <h1>Add Product</h1> 
            <input className='productfield' type="text" placeholder='Enter Product Name' onChange={(e)=>setName(e.target.value)} value={name}/>
            {error && !name &&<span className='field'>Enter Valid Name</span>}
            

            <input className='productfield' type="text" placeholder='Enter Product Price' onChange={(e)=>setPrice(e.target.value)} value={price}/>
           {error && !price && <span className='field'>Enter Valid Price</span>}

            <input className='productfield' type="text" placeholder='Enter Product Category' onChange={(e)=>setCategory(e.target.value)} value={category}/>
            { error && !category && <span className='field'>Enter Valid Category Name</span>}

            <input className='productfield' type="text" placeholder='Enter Company Name' onChange={(e)=>setCompany(e.target.value)} value={company}/>
           {error && !company && <span className='field'>Enter Valid Company Name</span>}

            <button onClick={addProduct} className="buttonApps">Add Produuct</button>

        </div>
    )
}

export default AddProduct