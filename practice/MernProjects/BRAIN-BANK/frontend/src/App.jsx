import React from 'react'
import { Button } from "./components/ui/button" 
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Favourite from './Pages/Favourite'
import Statistics from './Pages/Statistics'
import NavBar from './components/NavBar'
const  App = () => {
  return (

    <Router>
       <div className='min-h-secreen bg-gray-200 '>
         <NavBar/>
         <main className='container mx-auto px-4 py-8 '>
           <Routes>
             {/* default route for "/" */}
            <Route path="/" element={<Home />} />

            <Route path="/Home" element={<Home />} />
            <Route path="/Favourite" element={<Favourite />} />
            <Route path="/Statistics" element={<Statistics/>} />
           </Routes>
         </main>
       </div>
    </Router>
  )
}

export default App  