import { useState ,useEffect} from 'react'
// import { products } from '../../backend/data/products'

let API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000"


  function ProductCard({product, onAdd}){

    return(
      <div className='rounded-2xl p-4 bg-[#14161a] shadow hover:shadow-lg'>
        <img src={product.image} alt="" className='w-full h-48 oject-cover rounded-xl mb-3'/>

        <div className='flex items-center justify-between'>
          <h3 className='font-semibold text-lg'>{product.title}</h3>
          <span className='text-sm opacity-80'>{product.rating}</span>
        </div>

        <p className='text-sm opacity-80 line-clamp-2 my-1'>{product.description}</p>
        <div className='flex items-center justify-between mt-3'>
          <span className='text-xl font-bold'>{product.price}</span>
          <button className='px-3 py-2 rounded-xl bg-[#1f2837] hover:bg-[#29384d]' onClick={() => onAdd(product)}>Add to Cart</button>

        </div>
      </div>
    )
  }


function App() {

  const [loading,setLoading] =useState(true);
  const [products,setProducts] =useState([]);
  const [error,setError] =useState('');

  const [cart,setCart] =useState( ( ) => {
    let saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) :[]
  })

  useEffect(()=> {
    fetch(`${API_URL}/api/products`)
    .then( (response) => response.json())
  .then((data) => setProducts(data))
  .catch( (error) => console.log('product not found or load', error))
  .finally(() => setLoading(false))
  }, [])

  console.log(products)

  useEffect(()=> {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

// add to cart

const addToCart = (product) => {
  

  setCart( (prev) => {

    let productFound = prev.find( item => item._id === product._id);

    if(productFound) return prev.map(item => item._id === product._id ? {...item, qty: item.qty+1} : item);
    return [...prev, {...product, qty:1}]
  })
  console.log(product)

}

let totalProducts = cart.reduce( (n,item) => n + item.qty, 0)

let totalCartValue = cart.reduce( (sum,item) => sum +item.price * item.qty, 0)



  return (
    <>
     
    <div className='max-w-6xl p-4 mx-auto '>
      <header className='flex item-center justify-around mb-6 '>
        <h1 className='text-2xl md:text-3xl font-bold'>Mini-Store</h1>
        <div>Cart:[Product count-{totalProducts},Total Cart Value : {totalCartValue}]</div>
      </header>

      {loading && <p> loading products</p>}
      {error && <p className='text-red-400'>{error}</p>}
      <div className='grid grid:1 mt-10 gap-5 sm:grid-cols-2 md:grid-cols-3'>
        {products.map( (product) => (
          <ProductCard key={product._id} product={product} onAdd={addToCart}></ProductCard>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
