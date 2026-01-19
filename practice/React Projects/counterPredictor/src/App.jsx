import { useState } from 'react'
import './App.css'
 import { Routes, Route } from 'react-router-dom';
 import Landing from './pages/Landing';
 import Counter from './pages/Counter';
 import NotFound from './pages/NotFound';
import { CounterProvider } from './Context/CounterContext';
 
function App() {
 

  return (
    <>
    <CounterProvider>
    <Routes>
       <Route  path='/landing' element={<Landing/>}/>
       <Route  path='/counter' element={<Counter/>}/>
       <Route  path='*' element={<NotFound/>}/>
    </Routes>
    </CounterProvider>
    </>
  )
}

export default App
