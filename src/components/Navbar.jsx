/* eslint-disable no-undef */


import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";


const Navbar = ({ setSearch }) => {

  const { totalItems } = useContext(CartContext);
 

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          Ranjo Medix
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search chemicals..."
          onChange={(e) => setSearch(e.target.value)}
          className="hidden md:block w-1/3 px-4 py-2 rounded-lg bg-white/10 text-white"
        />

        {/* Menu */}
        <div className="hidden md:flex gap-6">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <div className="relative">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-cyan-500 text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}
          </div>

          {/* User */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)}>
              👤
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow w-40">
                // eslint-disable-next-line no-undef
                {!user ? (
                  // eslint-disable-next-line no-undef
                  <button onClick={login} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Login
                  </button>
                ) : (
                  <>
                    <p className="px-4 py-2">{user.name}</p>
                    // eslint-disable-next-line no-undef, no-undef, no-undef
                    <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      Logout
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 mb-3 rounded bg-white/10"
          />
          <a href="#" className="block mb-2">Home</a>
          <a href="#" className="block mb-2">Products</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;