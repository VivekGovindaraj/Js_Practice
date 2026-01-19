import React, { useEffect } from 'react'
import {Heart} from 'lucide-react'

import { useDispatch, useSelector } from 'react-redux'
import { getFavouriteThoughts } from '../redux/slice/ThoughtsSlice'
import ThoughtsCard from '../components/ThoughtsCard'



const Favourite = () => {


  let{thoughts, loading}  = useSelector( (state) => state.thoughts)


  let dispatch = useDispatch()


    useEffect(() => {

      dispatch(getFavouriteThoughts())
    }, [dispatch])

  
  return (
   
    <div className='mt-3 mb-6'>

       <div className='flex items-center gap-1'>
         <Heart className=' text-red-600 boreder-red-20 fill-red-500 h-10 w-10 mt-1'/> <h1 className="text-4xl font-bold "> Favourites</h1>
        </div>
        {/* Favourite Thoughts*/}
        <div className='mt-10 '>

          {!loading && thoughts.length === 0 && (
            <h1>No Favouirte Thoughts</h1>
          )}

          {
            !loading && thoughts.length >0 && (

              thoughts.filter( (thought) => thought.isFavourite).map(
                thought => (
                  <ThoughtsCard key={thought._id} thought={thought}/>
                )
              )


            )
          }
          

        </div>
    </div>
  )
}

export default Favourite