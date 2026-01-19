import React, { useContext } from 'react'
import Button from './Button'
import { MdDarkMode } from "react-icons/md";
import ThemeContext  from '../context/ThemeContext';

const Header = ({text,bgColor, textColor, display ,isDisabled} ) => {

let { darkMode, toggleTheme } = useContext(ThemeContext);

console.log(darkMode)

let bgStyle = {
  backgroundColor: darkMode ? "#111" : "#fff",  // dark → dark background
  color: darkMode ? "#fff" : "#000",            // dark → white text
  display: display
};

  return(
    <header style={bgStyle}>
      <div className='container' style={bgStyle}>
         <h1 style={{marginRight:"20px"}}>{text}</h1>

         <Button btnColor='btn-primary' type="button" isDisabled={false} btnName={darkMode ? 'Light Mode' : 'Dark Mode'} onClick={toggleTheme}><MdDarkMode fontSize='20px' /></Button>

      </div>
    </header>
  )
}

export default Header