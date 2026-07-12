import React, { createContext, useContext, useEffect, useState } from 'react'

let CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(() => {

        try{
            const savedCart = localStorage.getItem("cart")

            if(savedCart){
                setCartItems(JSON.parse(savedCart))
            }

            console.log(savedCart)
        }catch(error){
            console.error("Failed to Cart", error)
        }finally{
            setLoading(false)
        }
        
    }, [])

    // save cart items to local storage whenever cariTms gets change

    useEffect(() => {
        localStorage.setItem("cart" , JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product, quantity=1) => {
        console.log(product,quantity)
    }

    let value = {
    addToCart,
    loading
    }
  return (
    <>
        <CartContext.Provider value={value}>
              {children}
        </CartContext.Provider>
    </>
  )
}

const useCart = () => {
    let context = useContext(CartContext)

    if(!context) {
        throw new Error ("Cart Context must be used with cart provider")
    }
        
    return context
}
export default useCart