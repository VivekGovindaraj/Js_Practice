import React from 'react'
import{Brain , LineChart,BarChart2, Heart} from "lucide-react"
import { Link } from 'react-router-dom'
import { Button } from './ui/button'


const NavBar = () => {
  return (
    <div className='bg-white shadow'>
        <div className="container mx-auto px-4">
           <div className='flex items-center justify-between gap-1 ps-2 h-16'>
            <Link to="/" className='flex item-center space-x-2'>
                <Brain className='h-8 w-8 text-primary' />
                 <span className=" text-transparent text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text " >BrainBank</span>
            </Link>


           <div className='flex item-center gap-2 pe-3'>
              <Link to="/Home">
                <Button variant="outline">
                    <Brain />Thoughts
                </Button>
              </Link>

              <Link to="/Statistics">
                <Button variant="outline">
                    <LineChart/> Statistics
                </Button>
              </Link>

              <Link to="/Favourite">
                <Button variant="outline">
                    <Heart className='bg-red-50 text-red-600 boreder-red-20 fill-red-500'/>Favourites
                </Button>
              </Link>

              
        </div>
              
            </div>
        </div>
    </div>
    
   
  )
}

export default NavBar