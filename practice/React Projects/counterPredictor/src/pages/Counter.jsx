import React,{useState, useContext} from 'react';
import { Nav } from '../components/Nav'
import CounterCard from '../components/CounterCard';
import { milestones, mockAiMessage } from '../lib/ai'
import MilestonesCard from '../components/MilestonesCard'
import CounterContext from '../Context/CounterContext';





const Counter = () => {
 let {count, aiMsg, onDec, onInc, onReset } = useContext(CounterContext)


  return (
     <div className='min-h-screen bg-[#0b0f0a] text-white'>

      <Nav />

      <section className='px-6 sm:px-10 md:px-16 pt-20 md:pt-28'>
        <div className='max-w-6xl mx-auto items-center gap-10'>
          <div className='max-w-3xl mx-auto'>
            <CounterCard count={count} isMilestone={milestones.includes(count)}  aiMsg={aiMsg} loading={false} onDec={onDec} onInc={onInc} onReset={onReset} readOnly={false}/>
          </div>


          <div className="mt-10 max-w-3xl mx-auto">
              <MilestonesCard />
          </div>


        </div>
      </section>
    </div>
  )
}

export default Counter