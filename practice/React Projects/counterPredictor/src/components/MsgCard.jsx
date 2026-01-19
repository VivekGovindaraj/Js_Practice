import React from 'react'

const MsgCard = ({cardTitle,cardMsg}) => {
  return (
    <div className='flex flex-col p-4 bg-[#5e5e5e]/10  rounded-xl'>
        <label htmlFor="" className='text-md font-bold'>{cardTitle}</label>

        <p className='text-sm mt-1'>{cardMsg}</p>

    </div>
  )
}

export default MsgCard