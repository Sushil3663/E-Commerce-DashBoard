import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Fotter from './components/Fotter'
import SignUp from './components/SignUp'
import Outlets from './components/Outlets'
import Login from './components/Login'
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList'
import UpdateProduct from './components/UpdateProduct'

const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <Nav />
        <Routes>

        <Route element ={<Outlets />}>
            <Route path='/' element={<ProductList/>} />
            <Route path='/add' element={<AddProduct/>} />
            <Route path='/update/:id' element={<UpdateProduct/>} />
            <Route path='/logout' element={<h1>Logout</h1>} />
            <Route path='/profile' element={<h1>Welcome to Profile Page</h1>} />
          </Route>

            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
      <Fotter />


    </div>
  )
}

export default App;