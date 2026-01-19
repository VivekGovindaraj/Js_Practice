import React from 'react'
import Header from './Header'


const Button = ({btnColor,btnName, type, isDisabled, children, onClick}) => {
  return (
    <button className={`btn ${btnColor}`} type={type} disabled={isDisabled}  onClick={onClick}>{children} {btnName}</button>
  )
}

export default Button