import React, { useEffect, useState } from "react";
import '../App.css';
import {useNavigate } from 'react-router-dom'
const SignUp = () => {
    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [fieldname,setFieldName] =useState();
    // const [fieldemail,setFieldEmail] =useState();
    // const [fieldpass,setFieldPass] =useState();
    const navigate = useNavigate();

    const auth = localStorage.getItem('user');
    useEffect(()=>{
        if(auth){
        navigate('/login')
        }
    })
    
  
    const onSubmit = async() =>{
        // setFieldName(name)
        // setFieldEmail(email)
        // setFieldPass(password)

        
        let result = await fetch("http://localhost:5000/register",{
            method:"post",
            body:JSON.stringify({name,email,password} ),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        result = await result.json()
        localStorage.setItem("user",JSON.stringify(result))
        console.log(result)
        if(result){
            navigate('/login')
        }

    }
return (
    <div>
        <h2 className="fields">Register</h2>
        <input className="inputField" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="inputField" type="text" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="inputField" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="buttonApp" onClick={onSubmit} type="button">Sign Up</button>
    </div>
)

}

export default SignUp;