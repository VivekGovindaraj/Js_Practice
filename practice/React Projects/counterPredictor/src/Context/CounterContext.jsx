import React ,{createContext,useState}from 'react'
import { mockAiMessage,milestones } from '../lib/ai'


const CounterContext = createContext();

export const CounterProvider = ({children}) => {

     let [count,setCount] =useState(5)
      
          let aiMsg = mockAiMessage(count)  
    
    
         let onDec = () => {
            console.log("onDec clicked");
            setCount(val => val - 1);
          };
    
          let onInc = () => {
            console.log("onInc clicked");
            setCount(val => val + 1);
          };
    
          let onReset = () => {
            console.log("onReset clicked");
            setCount(0);
          };

          return(
            <CounterContext.Provider  value={{count,aiMsg,onDec,onInc,onReset}}>
                {children}
            </CounterContext.Provider>
          )
    

 }

export default CounterContext