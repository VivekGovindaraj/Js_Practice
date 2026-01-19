import React, { useEffect, useState } from 'react'


const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

 function ProductCard({p, onAdd}){
    return(
      <div className='rounded-2xl  p-4 bg-[#14161a] shadow hover:shadow-lg mt-3 me-3'>
        <img src={p.image} alt='' className="w-full h-48 object-cover rounded-xl mb-3" />
        <div className='flex items-center justify-between my'>
          <h3 className='font-semibold text-lg'>{p.title}</h3>
          <h3 className='text-sm opacity-80'>{p.rating}</h3>

        </div>
         <p className='text-sm opacity-80 limne-clamp-2 my'>{p.description}</p>
         <div className='flex items-center justify-between mt-3'>
            <span className='text-xl font-bold'>{p.price}</span>
            <button className='px-3 py-2 rounded-xl bg-[#1f2837] hover:bg-[#29384d]' onClick={() => onAdd(p)}>Add to cart</button>
         </div>
      </div>
    )
  }


const App = () => {


  const  [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cart,setCart] =useState(() =>{
    const saved = localStorage.getItem("cart");

    return saved ? JSON.parse(saved) :[]; 
  })


  useEffect(() => {
    fetch(`${API_URL}/api/products`)
    .then( res => res.json())
    .then( data =>setProducts(data))
    .catch(() => setError("Cant able to load products"))
    .finally(() => setLoading(false));
  }, [])


  // set cart item to local storage

  useEffect(() => {
     
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])


  // Product add to cart

  const addToCart = (p) => {
    setCart( prev =>{
      let found = prev.find( item => item._id == p._id)
 
      if(found) return prev.map( item => item._id == p._id ? {...item, qty: item.qty+1} : item)


        return [...prev, {...p, qty:1}]
    })
  }


 

  return (
    <div className='max-w-6xl p-4 mx-auto'>
       <header className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl md:text-3xl font-bold'>E-commerce - Mini store</h1>
        <div className='text-xl md:text-2xl font-bold'>Cart:</div>
       </header>


       {loading && <p>Loading products</p>}
       {error && <p className="text-red-400">{error}</p>}
       
       <div className='grid grid-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
         {
          products.map( 
            p => (
              <ProductCard  key={p._id} p={p} onAdd={addToCart}/>
            )
          )
         }
       </div>
    </div>
  )
}

export default App 