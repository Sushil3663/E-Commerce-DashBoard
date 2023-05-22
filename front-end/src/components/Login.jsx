import React, { useState,useEffect }from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'

const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
        useEffect(()=>{
            if(auth){
            navigate('/')
            }
        })

    const change = async() =>{
        
        console.log("Chhaged")
        let result = await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        result = await result.json();
        console.log(result)
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result))
            navigate('/')

        }
        else(
            alert("Please Enter Correct Details! :bellhop_bell:")
        )

    }
  return (
    <div>
        <h2 className="fields">Login</h2>
        <input className="inputField" type="text" placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <input className="inputField" type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <button className="buttonApp" onClick={change} type="button">Sign Up</button>
    </div>
  )
}

export default Login