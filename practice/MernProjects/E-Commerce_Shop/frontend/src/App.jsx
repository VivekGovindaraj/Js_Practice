import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import {Toaster} from 'react-hot-toast';
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div className='app-layout'>
      <Toaster />
      <Header/>
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/product/:id' element={<ProductDetails/>}></Route>
          </Routes>
         
        </main>
      <Footer/>
    </div>
  )
}

export default App