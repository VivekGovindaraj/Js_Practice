import React from 'react';
import Button from './Button';
import {Minus, Plus, RotateCcw} from 'lucide-react';




const CounterCard = ({
    count,isMilestone,aiMsg,loading,onInc,onDec,onReset,readOnly=false 
}) => {


  return (
    
    <div>

      <div className='flex flex-col items-center justify-center  border rounded-2xl border-[#9CE060] bg-[#5e5e5e]/10  shadow-[0_0_9px_#9CE060]'>

        <h1 className='text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mt-5'>{count}</h1>

        <div className='flex gap-3 mt-5'>
          <Button btnIcon={<Minus />} btnName='-1' onClick={onDec} disabled={readOnly}/>
          <Button btnIcon={<RotateCcw />} btnName='Reset' onClick={onReset} disabled={readOnly}/>
          <Button btnIcon={<Plus/>} btnName='+1' onClick={onInc} disabled={readOnly} />

           {/* <button onClick={() => console.log('Test Dec')}>-1</button>
  <button onClick={() => console.log('Test Reset')}>Reset</button>
  <button onClick={() => console.log('Test Inc')}>+1</button> */}
           
        </div>

        <div className='mt-8 mb-5'>
          <label htmlFor="" className='ms-1 font-[200] text-sm'>AI says</label>
          <p  className='px-5 py-2 mt-2  text-center rounded-xl bg-[#0b0f0a] text-md'>{aiMsg}</p>
          
        </div>

      </div>
        
    </div>
  )
}

export default CounterCard