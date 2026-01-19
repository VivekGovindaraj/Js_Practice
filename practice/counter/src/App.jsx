import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Counter from './pages/Counter'
import NotFound from './pages/NotFound'

const App = () => {
  return (
   <Routes>
     <Route path='/' element={<Landing/>}/>
     <Route path='/counter' element={<Counter/>}/>
     <Route path='*' element={<NotFound/>}/>
   </Routes>
  )
}

export default App