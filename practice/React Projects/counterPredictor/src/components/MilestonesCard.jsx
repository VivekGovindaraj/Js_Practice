import React, { useContext } from 'react'
import { milestones } from '../lib/ai'
import CounterContext from '../Context/CounterContext'



const MilestonesCard = () => {

  let {count} = useContext(CounterContext);


    
  return (
    <div>

        <div>
            <label htmlFor="" className='mt-3 text-sm font-bold'>Milestones</label>

            <div className='mt-2 flex items-center gap-2'>

                {
                    milestones.map( (stones) => (
                      <span key={stones} className={`inline-flex items-center gap-2 text-xs py-1 rounded-full border border-white/10 bg-white/5 p-4  ${ stones == count ?'shadow-[0_0_9px_#9CE060]' :''}`}>{stones}</span>  
                    ))
                }
               

            </div>
        </div>
    </div>
  )
}

export default MilestonesCard