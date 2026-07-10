
import {createContext, useContext, useState, useEffect, use} from 'react'
import api from '../services/api.js';
const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [laoding,setLoading] = useState(true);


    const register = async(name,email,password) => {
        try{
            const regData =await api.post('/auth/register')

        console.log(regData)
        }catch(error){
            return {
                success:false,
                error: error || "Registaration Failed"
            }
        }
    }

    const value = {
        user,
        register
    }
        return (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        )
}

const useAuthContext = () =>{ 
    let context = useContext(AuthContext)

    if(!context) {
        throw new Error("Use Auth must be used within authporvider")
    }
    return context
  }

export default useAuthContext;