

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart"));
    if (saved) setCart(saved);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id);
      if (found) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const increaseQty = (id) =>
    setCart(cart.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i)));

  const decreaseQty = (id) =>
    setCart(
      cart
        .map((i) =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );

  const placeOrder = () => {
    setCart([]);
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Menu addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              placeOrder={placeOrder}
            />
          }
        />
         <Route path="/favorites" element={<Favorites />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>

    </div>
  );
}
