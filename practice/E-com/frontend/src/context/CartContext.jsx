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
        if(loading) return
        localStorage.setItem("cart" , JSON.stringify(cartItems))
    }, [cartItems, loading])

    const addToCart = (product, quantity=1) => {
        console.log(product,quantity)

        setCartItems((prevCartItems) => {
        console.log("Previous cart:", prevCartItems);
        console.log("Product ID:", product._id);

        const existingItem = prevCartItems.find(
            item => item.product === product._id
        );

        if(existingItem){
                return prevCartItems.map(item => {
                    return   item.product === product._id ? {...item, quantity:item.quantity + quantity} :item
                })
        }else{
            return[...prevCartItems,
                {
                product: product._id,
                name: product.name,
                price: product.price,
                image: product.images[0]?.url,
                quantity
                }
            ]
        }

        
        });
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