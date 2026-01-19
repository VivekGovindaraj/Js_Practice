 // import React, { children } from "react";
import { createContext,  useState } from "react";


let ThemeContext = createContext();

export const ThemeProvider = ({children}) =>{


    let [darkMode, setDarkmode] = useState(true)

    console.log('fkjfnejafn')

    let toggleTheme = () => setDarkmode( prev => !prev)

    console.log('onclick triggered')

    console.log(setDarkmode, darkMode)

    

    return(
        <ThemeContext.Provider value={{darkMode, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;