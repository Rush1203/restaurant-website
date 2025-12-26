import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
  previousOrders: JSON.parse(localStorage.getItem("previousOrders")) || [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) item.qty += 1;
      else state.items.push({ ...action.payload, qty: 1 });

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    increaseQty(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.qty++;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    decreaseQty(state, action) {
      state.items = state.items
        .map(i => (i.id === action.payload ? { ...i, qty: i.qty - 1 } : i))
        .filter(i => i.qty > 0);

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    placeOrder(state) {
      const total = state.items.reduce(
        (sum, i) => sum + i.price * i.qty,
        0
      );

      state.previousOrders.push({
        id: Date.now(),
        items: state.items,
        total,
        date: new Date().toLocaleString(),
      });

      localStorage.setItem(
        "previousOrders",
        JSON.stringify(state.previousOrders)
      );

      state.items = [];
      localStorage.removeItem("cart");
    },

    clearOrderHistory(state) {
      state.previousOrders = [];
      localStorage.removeItem("previousOrders");
    },

    toggleFavorite(state, action) {
      const exists = state.favorites.find(f => f.id === action.payload.id);

      if (exists) {
        state.favorites = state.favorites.filter(f => f.id !== action.payload.id);
      } else {
        state.favorites.push(action.payload);
      }

      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  placeOrder,
  clearOrderHistory,
  toggleFavorite,
} = cartSlice.actions;

export default cartSlice.reducer;
