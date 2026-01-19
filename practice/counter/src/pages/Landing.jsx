import React, { useState } from 'react'

import Nav from '../components/Nav'
import Tag from '../components/Tag'
import CounterCard from '../components/CounterCard';

import { Sparkles } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

import { milestones, mockAiMessage } from '../lib/ai';





const Landing = () => {


  const [count, setCount] = useState(5);
  const aiMsg = mockAiMessage(count);


  return (
    <div className='min-h-screen bg-[#0b0f0a] text-white'>
       <Nav/>

       {/* Hero */}

       <section className='px-6 sm:px-10 md:px-16 pt-20 md:pt-28'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>
          <div>
             <h1 className='text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight'>
              AI <span className='text-[#9CE060]'>Counter</span> - 
              micro-wins, <span className='text-[#90D497]'>macro results</span>.
             </h1>
            
             <p className='mt-6'>
             A beautiful neon counter with micro-animations. Learn React fundamentals the fun way and sprinkle Al for motivation.
             </p>

             <div className='mt-8 flex flex-wrap gap-3'>
                <Tag icon={<Sparkles/>} label="Framer Motion"/>
                <Tag icon={<Zap/>} label="Neon UI"/>
                <Tag icon={<Brain/>} label="AI Tips"/>
             </div>

             <div className='mt-8 flex'>
              <Link to="/counter"
              className='px-5 py-2 rounded-xl border border-[#9CE060]
              bg-[#9be15d]/10 hover:bg-amber-600 shadow'>
                Try Counter
              </Link>
             </div>
          </div>

          <div>
            <CounterCard count={count}
            isMilestone={milestones.includes(count)}
            aiMsg={aiMsg}
            loading={false}
            readOnly/>
          </div>
        </div>
       </section>
    </div>
  )
}

export default Landing