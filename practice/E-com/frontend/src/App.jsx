import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/adminDashboard" element={<AdminDashboard/>}/>
        
    </Routes>
    </BrowserRouter>
   
    </>
    
  )
}

export default App