import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getData = async () => {
    console.log(params)
    let result = await fetch(`http://localhost:5000/product/${params.id}`)
    result = await result.json()
    console.log(result)
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)

  }


  const updatePro = async () => {
    console.log(name,price,category,company)
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: 'put',
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    result = await result.json()
    console.log(result)
    navigate("/")
 
  

  }


  return (

    <div className='product'>
      <h1>Update Product</h1>
      <input className='productfield' type="text" placeholder='Enter Product Name' value={name} onChange={(e) => setName(e.target.value)}  />


      <input className='productfield' type="text" placeholder='Enter Product Price'  value={price} onChange={(e) => setPrice(e.target.value)}  />


      <input className='productfield' type="text" placeholder='Enter Product Category'  value={category} onChange={(e) => setCategory(e.target.value)}  />


      <input className='productfield' type="text" placeholder='Enter Company Name'  value={company} onChange={(e) => setCompany(e.target.value)}/>

      <button onClick={updatePro} className="buttonApps">Update Item</button>

    </div>
  )
}

export default UpdateProduct