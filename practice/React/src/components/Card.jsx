import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Card = ({children}) => {


  const {darkMode} = useContext(ThemeContext)

  
  return (
   
    <div className={darkMode ? 'card-dark' : 'card'}>
        {
            children
        }
    </div>
  )
}

export default Card