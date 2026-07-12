import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {AuthProvider}from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'
import NavBar from './components/NavBar'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-slate-50 flex flex-col">
            <NavBar/>
            <main className='flex-1'>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                  <Route path="/register" element={<Register/>}/>
                  <Route path="/adminDashboard" element={<AdminDashboard/>}/>
                  
              </Routes>
            </main>
            <Footer/>
          </div>
        </CartProvider>
        
      
      </AuthProvider>
    </BrowserRouter>
   
    </>
    
  )
}

export default App