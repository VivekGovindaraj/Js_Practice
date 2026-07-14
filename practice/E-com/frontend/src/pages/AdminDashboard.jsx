  import React, { useState, useEffect } from 'react'
  import api from '../services/api'



  const AdminDashboard = () => {

    const [products,setProducts] = useState([]);
    const [orders,setOrders] = useState([]);
    const [editProduct, setEditProduct] = useState(null);
    const [activeTab,setActiveTab] = useState("products")
    const [formData,setFormData] = useState({
      name:"",
      price:"",
      description:"",
      // image:"",
      category:"",
      stock:"",
      seller:""
    })


    useEffect(() =>{
      fetchProducts(),
      fetchOrders()
    }, [])


    const fetchProducts = async() => {

      try{

        const {data} = await api.get('/product');
        console.log(data)

        setProducts(data)
      }catch(error){
        console.log("Error occured while load products", error)
      }
    }

      const fetchOrders = async() => {

      try{

        const {data} = await api.get('/order');
        console.log(data)

        setOrders(data)
      }catch(error){
        console.log("Error occured while load products", error)
      }
    }


    const handleInputChange = (e) => {
      setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleDelete = async(productId) =>{

      if(window.confirm("Are you you want to delete this product?")){
        try{
          await api.delete(`/product/${productId}`)
          fetchProducts()
        }catch(error){
          console.log("Eroor happend while delete product", error)
        }
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        await api.post('/product' , formData)
        console.log("Product created succesfully")
      }catch(error){
        
        console.log("Error happend while post product please check", error)
      }

      fetchProducts()
      resetForm()

    }

    const resetForm = () => {

      setFormData({
        name:"",
      price:"",
      description:"",
      // image:"",
      category:"",
      stock:"",
      seller:""
      })
    }
    return (
      <>
        <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500 mt-1">
            Manage products and orders for ShopVerse
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Products</p>
            <p className="text-3xl font-bold text-indigo-600">{products.length}</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <p className="text-sm text-slate-500">Total Orders</p>
            <p className="text-3xl font-bold text-indigo-600">{orders.length}</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
            <p className="text-sm text-slate-500">Pending Orders</p>
            <p className="text-3xl font-bold text-amber-600">
              {/* {orders.filter((o) => o.status === "Pending").length} */}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-slate-100 p-1 rounded-xl w-fit">
          {["products", "orders"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold capitalize transition ${
                activeTab === tab
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-slate-600 hover:text-indigo-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "products" && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                {editProduct ? "Edit Product" : "Add New Product"}
              </h2>

              <form  onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <input
                    type="text"
                    name="category"
                    placeholder="Category (e.g. Electronics)"
                    value={formData.category}
                  onChange={handleInputChange}
                    className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                  <input
                    type="number"
                    name="stock"
                    placeholder="Stock quantity"
                    value={formData.stock}
                    onChange={handleInputChange}
                    min="0"
                    className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />

                  <input
                    type="text"
                    name="seller"
                    placeholder="Seller"
                    value={formData.seller}
                    onChange={handleInputChange}
                    min="0"
                    className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                <textarea
                  name="description"
                  placeholder="Product description"
                  value={formData.description}
                onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />

                {/* <ImageUpload
                  value={formData.image}
                  onChange={(url) => setFormData({ ...formData, image: url })}
                /> */}

                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
                  >
                    {editProduct ? "Update Product" : "Add Product"}
                  </button>
                  {editProduct && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-2.5 bg-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-300 transition"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                        Product
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                        Price
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                        Stock
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {products.map((product) => (
                      <tr key={product._id} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={product.images?.[0]?.url}
                              alt={product.name}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <div className="font-medium text-slate-900">
                                {product.name}
                              </div>
                              <div className="text-sm text-slate-500">
                                {product.category}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-medium">
                          &#x20B9;{product.price?.toFixed(2)}
                        </td>
                        <td className="px-6 py-4">{product.stock}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button
                          
                              className="px-3 py-1.5 bg-amber-100 text-amber-800 rounded-lg text-sm font-medium hover:bg-amber-200 transition"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(product._id)}
                              className="px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                      Order ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                      Customer
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                      Total
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase">
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {orders.length === 0 ? (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-6 py-12 text-center text-slate-500"
                      >
                        No orders yet
                      </td>
                    </tr>
                  ) : (
                    orders.map((order) => (
                      <tr key={order._id} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-mono text-sm">
                          #{order._id.slice(-8).toUpperCase()}
                        </td>
                        <td className="px-6 py-4">
                          {order.user?.name || "Unknown"}
                        </td>
                        <td className="px-6 py-4 font-medium">
                          ${order.totalPrice?.toFixed(2)}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusColors[order.status] || statusColors.Pending}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            onChange={(e) =>
                              updateOrderStatus(order._id, e.target.value)
                            }
                            value={order.status}
                            className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      </>
    )
  }

  export default AdminDashboard