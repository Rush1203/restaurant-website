import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleFavorite } from "../features/cartSlice";
import toast from "react-hot-toast";

export default function MenuItem({ item }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cart.favorites);

  const isFav = favorites.some(f => f.id === item.id);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-3 relative">
      
      {/*  Favorite */}
      <button
        onClick={() => {
          dispatch(toggleFavorite(item));

          if (isFav) toast.success("Removed from favorites ❌");
          else toast.success("Added to favorites ❤️");
        }}
        className="absolute top-3 right-3 text-xl hover:scale-110 transition"
      >
        {isFav ? "❤️" : "🤍"}
      </button>

      <img
        src={item.image}
        alt={item.name}
        className="h-44 w-full object-cover rounded-xl"
      />

      <div className="mt-4 space-y-1">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{item.name}</h3>

          {item.featured && (
            <span className="text-[10px] bg-yellow-300 px-2 py-1 rounded-full">
              ⭐ Special
            </span>
          )}
        </div>

        <p className="text-gray-500 text-sm">{item.category}</p>

        <div className="flex justify-between items-center mt-3">
          <p className="font-bold text-lg">₹{item.price}</p>

          <button
            onClick={() => {
              dispatch(addToCart(item));
              toast.success("Added to cart 🛒");
            }}
            className="bg-blue-600 text-white px-4 py-1.5 rounded-xl hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
