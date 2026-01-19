import React from 'react'

const Tag = ({icon,label}) => {
  return (
    <div className='inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5'>
        <span>{icon}</span>
        <span>{label}</span>
    </div>
  )
}

export default Tag