import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite, addToCart } from "../features/cartSlice";
import toast from "react-hot-toast";

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cart.favorites);

  if (favorites.length === 0)
    return <h2 className="p-6 text-xl">No favorites yet ❤️</h2>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">❤️ Favorites</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map(item => (
          <div key={item.id} className="bg-white rounded-2xl shadow-sm p-4">
            <img src={item.image} className="h-40 w-full object-cover rounded-xl" />

            <div className="mt-3 flex justify-between items-center">
              <h3 className="font-semibold">{item.name}</h3>

              <button
                onClick={() => {
                  dispatch(toggleFavorite(item));
                  toast.success("Removed from favorites ❌");
                }}
                className="text-xl hover:scale-110 transition"
              >
                ❤️
              </button>
            </div>

            <p className="text-gray-500 text-sm">{item.category}</p>

            <div className="flex justify-between items-center mt-3">
              <p className="font-bold">₹{item.price}</p>

              <button
                onClick={() => {
                  dispatch(addToCart(item));
                  toast.success("Added to cart 🛒");
                }}
                className="bg-blue-600 text-white px-3 py-1 rounded-xl hover:bg-blue-700"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
