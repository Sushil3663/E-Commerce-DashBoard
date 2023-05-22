import React from "react";
import '../App.css';
import logo from '../logo/logo.png'
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const change = () => {
        localStorage.clear()
        navigate('/login')

    }
    return (
        <>      
          <div>

            {auth ? <ul className="nav-ul">
                <img src={logo} alt="logo" className="logo" />
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Product</Link></li>
                <li><Link to='/update/:id'>Update Product</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={change} to='/login'>Logout</Link> </li>
            </ul> :
                <ul className="nav-ul nav-right">
                    <img src={logo} alt="logo" className="logo" />
                    <li> <Link to='/signup'>SignUp</Link>
                        <Link to="/login">Login</Link></li>
                </ul>

            }
        </div>
        </>


    )

}

export default Nav;