import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

const ProductList = () => {
    let [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct();

    }, [])

    const getProduct = async () => {
        let data = await fetch("http://localhost:5000/product");
        data = await data.json()
        setProduct(data)
        console.log(data)

    }
    const remove =async(id) => {
        let data = await fetch(`http://localhost:5000/product/${id}`,{
            method:"Delete"
        });
        data = await data.json()
        console.log(id)
        console.log(data)
        if(data){
            alert("Item is Deleted")
             getProduct();

        }
        

    }
    const search = async(event) =>{
        let key = event.target.value;
        console.warn(key)
       
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json()
            if(result){
                setProduct(result)
            }
        }
        else{
            getProduct();
        }

    }

    return (
    
        <div className='product-list'>
            <h1>Product List</h1>
            <input type="text" placeholder='Enter to search Item' className='search' onChange={search} />
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Company</li>
                <li>Category</li>
                <li>Operation</li>

            </ul>
            
        
          
            {
              product.length>0 ?  product.map((element, index) => {
                    return (
                        <ul key={element._id}>
                            <li>{index}</li>
                            <li>{element.name}</li>
                            <li>${element.price}</li>
                            <li>{element.company}</li>
                            <li>{element.category}</li>
                            <li><button onClick={()=>remove(element._id)}>Delete</button>
                            <button><Link to={`/update/${element._id}`}>update</Link></button>
                            </li>



                        </ul>

                    )
                    

                })
                : <h1>No Product Found 📄</h1>
            }
            
        

        </div>

    )
}

export default ProductList