import React, { useContext } from 'react'
import { Nav } from '../components/Nav';
import Tag from '../components/Tag';
import { Brain, Sparkles, Zap } from 'lucide-react';
import {Link}  from 'react-router-dom';
import CounterCard from '../components/CounterCard';
import { mockAiMessage,milestones } from '../lib/ai';
// import MilestonesCard from '../components/MilestonesCard';
import MsgCard from '../components/MsgCard';
import MilestonesCard from '../components/MilestonesCard';
import CounterContext from '../Context/CounterContext';



 

const Landing = () => {


  const { count, aiMsg, onDec, onInc, onReset } = useContext(CounterContext);
  

   
   
  return (

    <div className='min-h-screen bg-[#0b0f0a] text-white'>
         <Nav />

        {/* section */}
         <section className='px-6 sm:px-10 md:px-16 pt-20 md:pt-28'>
            <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
                <div>
                   <h1 className='text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight'>
                    AI <span className='text-[#9CE060]'>Counter</span> - 
                    micro-wins, <span className='text-[#90D497]'>macro results</span>.
                   </h1>

                    <p className='mt-6'>A beautiful neon counter with micro-animations. Learn React fundamentals the fun way and sprinkle Al for motivation.</p>
                    <div className='mt-8 flex flex-wrap gap-3'>
                        <Tag icon={<Sparkles />} label="Framer Motion"/>
                        <Tag icon={<Zap />} label="Neon UI"/>
                        <Tag icon={<Brain />} label="AI Tips"/>
                    </div>

                    <div className="mt-8 flex">
                        
                        <Link to='/counter'
                           className='px-5 py-2 rounded-xl border border-[#9CE060] bg-[#9be15d]/10 hover:bg-[#0b0f0a] shadow-[0_0_14px_#9CE060]' >Counter</Link>
                    </div>
                
                </div>


                <div>
                   <CounterCard
                    count={count} isMilestone={milestones.includes(count)} aiMsg={aiMsg} loading={false} readOnly={false} onReset={onReset} onDec={onDec} onInc={onInc} />
                </div>


               
            </div>
             <div className='mt-8 flex gap-3 max-w-6xl mx-auto '>
                  <MsgCard cardTitle="Aaward-style Asthetics" cardMsg="Glass,gradients,minimal yet memorable." />
                  <MsgCard cardTitle="Fundamanetals-First" cardMsg="UseState,events,clean code, Begineer-friendly" />
                  <MsgCard cardTitle="AI sprinkles" cardMsg="Short, motivitonal micro-copy driven bu AI." />
                </div>

                
                <div className="mt-8 flex gap-3 items-center max-w-6xl mx-auto ">

                    <MilestonesCard />
                </div>
            
         </section>
    </div>

    

    
 
  )
}

export default Landing