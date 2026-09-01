import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
// import LoadingSpinner from "../components/LoadingSpinner";
// import { showError } from "../utils/toast";

const statusColors = {
  Pending: "bg-slate-100 text-slate-700",
  Processing: "bg-amber-100 text-amber-800",
  Shipped: "bg-blue-100 text-blue-800",
  Delivered: "bg-emerald-100 text-emerald-800",
};

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(orders)

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await api.get("/order/myorders");
      setOrders(data.orders);
    } catch(error) {
      console.log("Failed to load your orders", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">My Orders</h1>
      <p className="text-slate-500 mb-8">Track and manage your purchases</p>

      {orders.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            No orders yet
          </h2>
          <p className="text-slate-500 mb-6">
            Start shopping to see your orders here
          </p>
          <Link
            to="/"
            className="inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 border-b border-slate-100 bg-slate-50/50">
                <div>
                  <p className="text-sm text-slate-500">
                    Order #{order._id.slice(-8).toUpperCase()}
                  </p>
                  <p className="text-sm text-slate-500">
                    {new Date(order.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.orderStatus] || statusColors.Pending}`}
                  >
                    {order.orderStatus}
                  </span>
                  <span className="text-lg font-bold text-indigo-600">
                    ${order.totalPrice?.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3">
                {order.orderItems?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="text-slate-700">
                      {item.name}{" "}
                      <span className="text-slate-400">× {item.quantity}</span>
                    </span>
                    <span className="font-medium text-slate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
