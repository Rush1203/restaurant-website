import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const favorites = useSelector((state) => state.cart.favorites);

  const totalOrders = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          🍽 CartFlow
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-8 font-medium">
          <Link to="/favorites" className="relative hover:text-pink-600 transition">
            ❤️ Favorites
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-500 text-white text-xs px-2 rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link to="/contact" className="hover:text-green-600 transition">
            📞 Contact
          </Link>

          <Link to="/cart" className="relative hover:text-blue-600 transition">
            🛒 Cart
            {totalOrders > 0 && (
              <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-xs px-2 rounded-full">
                {totalOrders}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-2xl focus:outline-none"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="sm:hidden fixed inset-0 bg-black/30 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile dropdown */}
      <div
        className={`
          sm:hidden fixed right-3 left-3 top-20
          bg-white rounded-2xl shadow-xl
          transition-all duration-300
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}
        `}
      >
        <div className="px-5 py-4 space-y-4 font-medium">

          <Link
            to="/favorites"
            onClick={() => setOpen(false)}
            className="flex justify-between items-center py-2"
          >
            ❤️ Favorites
            {favorites.length > 0 && (
              <span className="bg-pink-500 text-white text-xs px-2 rounded-full">
                {favorites.length}
              </span>
            )}
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="flex justify-between items-center py-2"
          >
            📞 Contact
          </Link>

          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="flex justify-between items-center py-2"
          >
            🛒 Cart
            {totalOrders > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 rounded-full">
                {totalOrders}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
