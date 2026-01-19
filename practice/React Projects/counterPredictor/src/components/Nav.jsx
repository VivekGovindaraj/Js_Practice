import React from 'react'

export const Nav = () => {
  return (
    <nav className='max-w-6xl mx-auto px-6 py-3 border-b border-[#446713]/50'>
        <a href="#"  className='flex items-center gap-3'>
            <div className='h-8 w-8 rounded-xl bg-[#446713]'></div>
            <span className='font-semibold '>AI Counter</span>
        </a>
    </nav>
  )
}
