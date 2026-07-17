import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
import useCart from "../context/CartContext";



const NavBar = () => {

  const {user, logout} = useAuthContext();
  const {cartItems} = useCart()
  const navigate = useNavigate()
  
//   const [user] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = async () => {
    logout()
    navigate('/login')
  }

  const navLinks = (
    <>
      <Link to="/"  onClick={closeMenu} className="hover:text-indigo-200 transition font-medium" >
        Products
      </Link>

      <Link to="/cart" onClick={closeMenu} className="relative hover:text-indigo-200 transition font-medium" >
        Cart

        <span className="absolute -top-2 -right-4 bg-amber-400 text-slate-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
         0
        </span>
      </Link>   

    {user && (
      <Link to="/orders" onClick={closeMenu} className="hover:text-indigo-200 transition font-medium" >
        My Orders
      </Link>
    )}

    {user?.isAdmin && (
      <Link to="/adminDashboard"  onClick={closeMenu} className="hover:text-indigo-200 transition font-medium" >
        Admin
      </Link>
    )}
    </>
  );

  const authLinks = 
    user ? (
            <div className="flex flex-col md:flex-row items-center gap-3">
            <span className="text-indigo-200 text-sm">
                Hi, {user.name}
            </span>

            <button onClick={handleLogout}
                className="w-full md:w-auto px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition"
            >
                Logout
            </button>
            </div> 

    ) : (
            <div className="flex flex-col md:flex-row items-center gap-3">
            <Link to="/login" onClick={closeMenu}
                className="w-full md:w-auto text-center px-4 py-2 hover:bg-white/10 rounded-xl text-sm font-medium transition"
            >
                Login
            </Link>

            <Link to="/register" onClick={closeMenu}
                className="w-full md:w-auto text-center px-4 py-2 bg-white text-indigo-700 hover:bg-indigo-50 rounded-xl text-sm font-semibold transition"
            >
                Sign Up
            </Link>
            </div>
    );
 
    

  return (
    <nav className="sticky top-0 z-50 bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Navbar */}

        <div className="flex items-center justify-between h-16">

          {/* Logo */}

          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold tracking-tight"
          >
            Shop<span className="text-amber-300">Verse</span>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-8">
            {navLinks}
          </div>

          {/* Desktop Auth */}

          <div className="hidden md:block">
            {authLinks}
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden border-t border-indigo-600 py-5 space-y-5">

            <div className="flex flex-col gap-4">
              {navLinks}
            </div>

            <div className="border-t border-indigo-600 pt-5">
              {authLinks}
            </div>

          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;