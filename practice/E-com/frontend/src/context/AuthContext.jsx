
    import {createContext, useContext, useState, useEffect, use} from 'react'
    import api from '../services/api.js';
    const AuthContext = createContext();

    export const AuthProvider = ({children}) => {

        const [user,setUser] = useState(null);
        const [laoding,setLoading] = useState(true);


        const register = async(name,email,password) => {
            try{
                
                const {data}= await api.post('/auth/register', {name,email,password})

            localStorage.setItem("token", data.token)
            setUser(data)
                return {
                    success:true,
                    data
                }

            
            }catch (error) {
            console.log(error.response?.data);

            return {
                success: false,
                error: error.response?.data?.message || error.message || "Registration Failed",
            }
    }
        }

        const login = async (email,password) => {

            try{
    

            let loginResponse = await api.post("/auth/login" , {email, password})
            const {data} = loginResponse
            localStorage.setItem("token", data.token)
            setUser(data)

            return{
                success:true,
                data
            }


            }catch (error) {
            console.log(error.response?.data);

            return {
                success: false,
                error: error.response?.data?.message || error.message || "Login Failed. check with email and password",
            }
        }
    }


    const logout = async(email,pasword) => {
        localStorage.removeItem("token")
        setUser(null)
    }
        const value = {
            user,
            register,
            login,
            logout
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